import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OktaAuth } from '@okta/okta-auth-js';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private oktaAuth: OktaAuth) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.handleAccess(request, next));
    }
    private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>>{
        // only add an access token for secured endpints
        const securedEndpoints = ['http://localhost:8080/api/orders']

        if (securedEndpoints.some(url => request.urlWithParams.includes(url))){

            //get access token
            const accessToken = await this.oktaAuth.getAccessToken();

            // clone the request and add new header with access token
            request = request.clone({
                setHeaders:{
                    Authorization: 'Bearer ' + accessToken
                }
            })

        }
        return next.handle(request).toPromise();
    }
}
