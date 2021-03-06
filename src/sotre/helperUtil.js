export function successMessage(successPage, response, store) {
    let storeObjResponse = {};
    response = response.data;
    if (response.ticket) storeObjResponse.ticket = response.ticket;
    if (response.verification_id)
      storeObjResponse.verification_id = response.verification_id;
    if (response.token_id) storeObjResponse.token_id = response.token_id;
    if (response.status) storeObjResponse.status = response.status;
    if (response.factors) storeObjResponse.factors = response.factors;
    if (response.phonenumber) storeObjResponse.phonenumber = response.phonenumber;
    if (response.email) storeObjResponse.email = response.email;
    if (response.question) storeObjResponse.question = response.question;
    if (response.token_voice) storeObjResponse.token_voice = response.token_voice;
    if (response.verfytype) storeObjResponse.verfytype = response.verfytype;
    if (successPage == "QUESTIONS")
      if (response.issued_by.issue_challenge_question.question)
        storeObjResponse.question =
          response.issued_by.issue_challenge_question.question;
    if (successPage == "UPDATEVERIFYOTP") {
      (storeObjResponse.ticket = response.verification_id),
        (storeObjResponse.verificationtype = response.verificationtype);
      if (response.verificationtype == "SMS")
        storeObjResponse.phonenumber = response.phonenumber;
      else if (response.verificationtype == "EMAIL")
        storeObjResponse.new_email = response.email;
    }
    if (successPage == ConstUtil.RegistrationStatus.enroll2FA) {
      (storeObjResponse.groupOneQuestions = response.groupOneQuestions),
        (storeObjResponse.groupTwoQuestions = response.groupTwoQuestions),
        (storeObjResponse.groupThreeQuestions = response.groupThreeQuestions);
    }
    if(successPage == PREPOPULATE){
      storeObjResponse.initialValues = {
        email:response.email,
        emailConf:response.email,
        firstName:response.firstName,
        lastName:response.lastName,
        countryCode:response.phone.countryCode,
        phoneNumber:response.phone.phoneNumber,
        isSmsEnabled:response.phone.smsEnabled
      }
    }
    if (Object.keys(storeObjResponse).length > 0) {
      store.dispatch({
        type: successPage,
        storeObjResponse
      });
    } else {
      store.dispatch({
        type: successPage
      });
    }
  } 