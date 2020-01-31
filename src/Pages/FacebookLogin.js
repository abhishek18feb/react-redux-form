import React, {Component} from 'react';

class FacebookLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
    }
    componentDidMount(){
        window.fbAsyncInit = function() {
            window.FB.init({
              appId      : '1073000363033769',
              cookie     : true,
              xfbml      : true,
              version    : 'v5.0'
            });
              
            window.FB.AppEvents.logPageView();   
        };
          
          
    }

    getUserDetails = () =>{
        console.log('button clicked');
        window.FB.login(function(response) {
            if (response.authResponse) {
             console.log('Welcome!  Fetching your information.... ');
             window.FB.api('/me', function(response) {
                console.log(response)
               console.log('Good to see you, ' + response.name + '.');
             });
            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        });
    }

    checkLoginState = () =>{
        window.FB.getLoginStatus(function(response) {
          //statusChangeCallback(response);
        });
      }
    render(){
        return (
            <React.Fragment>
                <button onClick={this.getUserDetails}>
                    Facebook Login Button
                </button>
            </React.Fragment>
        )
    }
}

export default FacebookLogin;