import { Component, OnInit } from '@angular/core';
import { OktaAuth } from '@okta/okta-auth-js';
import * as OktaSignIn from '@okta/okta-signin-widget'

import myAppConfig from 'src/app/config/my-app-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    oktaSignin: any;
  constructor(private oktaAuth: OktaAuth,
                      ) { 

                        this.oktaSignin = new OktaSignIn({
                            logo: 'assets/images/logo.png',
                            baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
                            clientId: myAppConfig.oidc.clientId,
                            redirectUri: myAppConfig.oidc.redirectUrl,
                            authParams: {
                              pkce: true,
                              issuer: myAppConfig.oidc.issuer,
                              scopes: myAppConfig.oidc.scopes
                            }
                      
                          });
                      }



  ngOnInit(): void {
      this.oktaSignin.remove();

      this.oktaSignin.renderEl({
          el: '#okta-sign-in-widget'},
          (response) => {
              if (response.status === 'success'){
                  this.oktaAuth.signInWithRedirect();
              }
          },
          (error) => {
              throw error;
          }
      )
  }

}
