import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  public apiServer = 'http://localhost:8000';
  public enableDebug = true;
  public surveySite = 'http://localhost:4400';

  constructor() { }
}
