import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { EnvService } from '../services/env.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router, private httpClient: HttpClient, private envService: EnvService) { }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (httpRequest.headers.get('secure')) {
            var authToken = localStorage.getItem('authToken');
            var jwtHelper = new JwtHelperService();
            if (!jwtHelper.isTokenExpired(authToken)) {
                // We are trying to access secure resources and token has not expired.
                // Lets just pass the token and get on with whatever we were doing.
                var request = this.getRequestWithAuthToken(httpRequest);
                return next.handle(request);
            }
            else {
                // We are trying to access secure resources and token has expired.
                // Let's redirect to the login page.
                localStorage.clear();
                this.router.navigateByUrl('/login');
                return next.handle(httpRequest);
            }
        }
        else {
            // We are trying to access a resource that is not protected.
            return next.handle(httpRequest);
        }

    }

    private getRequestWithAuthToken(request: HttpRequest<any>): HttpRequest<any> {
        var authToken = localStorage.getItem('authToken');
        return request.clone({
            setHeaders: {
                Authorization: `Bearer: ${authToken}`
            }
        });
    }
}

