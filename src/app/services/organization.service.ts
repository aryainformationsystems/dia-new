import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../classes/api-response';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient, private envService: EnvService) {
    this.baseUrl = envService.apiServer + '/organization';
  }

  getAll(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.baseUrl, {
      headers: { secure: 'true' },
    });
  }

  create(organizationDetails: any): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(
      this.baseUrl,
      organizationDetails,
      { headers: { secure: 'true' } }
    );
  }

  getById(id: string): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.baseUrl + '/' + id, {
      headers: { secure: 'true' },
    });
  }

  delete(id: string): Observable<ApiResponse> {
    return this.httpClient.delete<ApiResponse>(this.baseUrl + '/' + id, {
      headers: { secure: 'true' },
    });
  }

  deleteMany(ids: string[]): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(
      this.baseUrl + '/delete',
      {
        ids,
      },
      { headers: { secure: 'true' } }
    );
  }

  update(id: string, organizationDetails: any): Observable<ApiResponse> {
    return this.httpClient.put<ApiResponse>(
      this.baseUrl + '/' + id,
      organizationDetails,
      { headers: { secure: 'true' } }
    );
  }
  getNameAndId(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.baseUrl, {
      headers: { secure: 'true' },
    });
  }

  totalOrganizations(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(
      this.baseUrl + '/totalOrganizations',
      { headers: { secure: 'true' } }
    );
  }
}
