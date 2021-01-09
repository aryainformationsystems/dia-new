import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../classes/api-response';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private envService: EnvService, private httpClient: HttpClient) { }

  register(userDetails): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.envService.apiServer + '/adminuser', userDetails);
  }

  authenticate(userDetails: any): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.envService.apiServer + '/adminuser/auth', userDetails);
  }

  logout(): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.envService.apiServer + '/adminuser/logout', {}, { headers: { secure: 'true' } });
  }

  forgotPassword(email: string): Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>(this.envService.apiServer + '/adminuser/forgot-password', { email: email });
  }

  changePassword(email: string, password: string, tempToken: string): Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>(this.envService.apiServer + '/adminuser/change-password', {
      email: email,
      password: password,
      tempToken: tempToken
    });
  }

}
