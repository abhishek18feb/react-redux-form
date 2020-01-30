export const loginUser = payload => dispatch => {
    helperUtil.setApiKey(store.getState().jsonStoreData.appConfig.apiKey);
  
    var data = {};
    data.userName = payload.userName;
    data.password = payload.password;
    data.deviceinfo = {};
  
    //**TO-DO  ( Delete the X-AIG-DSUApiTicket  from  header request ) */
  
    var headerObj = {};
    return helperUtil
      .helperRequest(
        "POST",
        getLoginUrl() + ConstUtil.APIConstants.login,
        null,
        data
      )
      .then(function (response) {
        var payload = {};
        if (response.data != undefined && response.data.ticket != undefined) {
          payload.ticket = response.data.ticket;
        }
        helperUtil.setCookieDSU(
          response.headers[ConstUtil.responseHeaders.X_AIG_DeviceTokenCookie],
          response.headers[ConstUtil.responseHeaders.X_AIG_DeviceTokenFSO]
        );
  
        if (response.data.user) {
          payload = { ...payload, ...response.data.user };
          dispatch(setEnrollmentData(payload));
        }
        if (response.data.status == ConstUtil.RegistrationStatus.Success) {
          if (response.data.ticket != null) {
            helperUtil.updateTrustedDeviceHeader();
            return generateAccessToken(response.data);
          } else {
            dispatch({ type: GO_TO_HOME });
            return response.data;
          }
        } else if (response.data.status == UNVERIFIED_EMAIL) {
          if (response.data.user && response.data.user.allowEmailEdit)
            dispatch(goToPage(EDIT_EMAIL));
          else
            dispatch(goToPage(EMAIL, DSU_FLOW_ENROLLMENT));
        } else if (response.data.status == UNVERIFIED_PHONE) {
          if (response.data.user && response.data.user.allowPhoneEdit)
            dispatch(goToPage(EDIT_PHONE));
          else
            dispatch(goToPage(VOICE, DSU_FLOW_ENROLLMENT));
        } else if (response.data.status == UNVERIFIED_SMS) {
          if (response.data.user && response.data.user.allowPhoneEdit)
            dispatch(goToPage(EDIT_PHONE));
          else
            dispatch(goToPage(SMS, DSU_FLOW_ENROLLMENT));
        } else if (response.data.status == TWO_FA_ENROLL) {
          dispatch(getChallengeQuestionsOnRegister(payload.ticket));
        } else if (response.data.status == PASSWORD_RESET_REQUIRIED) {
          return {
            status: "UI_PASSWORD_RESET_REQUIRED"
          };
        } else if ((response.data.status == TWO_FA_REQUIRED)) {
          response.data.email = response.data.user.email;
          response.data.phonenumber = response.data.user.phone_numbers[0].number;
          return helperUtil.successMessage(LOGIN_VERIFY_METHODS, response, store);
        }
        return response.data;
      })
      .catch(function (error) {
        return catchError(error, null);
      });
  };