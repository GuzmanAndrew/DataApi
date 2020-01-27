import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(protected http: HttpClient) { }

  getApiOne(): Observable<any> {
    return this.http.get('https://www.chevynet.com.co:8097/api/VentasCantadas');
  }

  getApiTwo() {
    return this.http.get('https://www.chevynet.com.co:8097/api/Ciudad?Correo=');
  }

  getApiThree() {
    return this.http.get('https://www.chevynet.com.co:8097/api/VentasCantadas?Correo=');
  }
}
