import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURI = 'https://hu7yj4035d.execute-api.eu-west-1.amazonaws.com/dev/';

  headers = new HttpHeaders().set("x-api-key", "");

  constructor(private http : HttpClient) { }

  createAuthorizationHeader(){

  }

  getAllBooks(){

  }

}
