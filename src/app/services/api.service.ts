import { Keys } from './keys';
//<Remove me> import { KeysSample } from './keys-sample';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './../models/book.model';


//This whole service is a bit ot a overkill, but i guess I've started it now...
@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{
  constructor(private http : HttpClient, private keys : Keys) { } //Keys -> KeysSample

  ngOnInit(){

  }

  onGetBooks() : Observable<any[]> {


    const httpHeader: HttpHeaders = new HttpHeaders({
      'x-api-key': this.keys.API_KEY,
      'x-authorization': this.keys.AUTH_TOKEN,
      "Content-Type": "application/json"
  });

    this.http.get(this.keys.SERVICE_URI + "books", {headers: httpHeader}).subscribe(books => {
      console.log(books)
    });

    return;
  }

  onAddBook(){

  }

  onDeleteBook(){

  }

  createAuthorizationHeader(){

  }

}
