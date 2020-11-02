import { Injectable, EventEmitter, OnInit} from '@angular/core';
import { Book } from '../models/book.model';
import { Keys } from './keys';
import { KeysSample } from './keys-sample';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class BookService{
  //A couple of example books
  public books : Book[] = [];

  private searchSource = new BehaviorSubject<string>("");
  currentSearch = this.searchSource.asObservable();

  //Change keys : -> Keys <- too "KeysSample" and enter the proper keys, and it will work :)
  constructor(private http : HttpClient, private keys : Keys) {  

  }

  updateSearchTerm(message: string){
    this.searchSource.next(message);
  }

  getBooks(){
    this.fetchBooks();
    return this.books;
  }

  createBook(id : string, author : string, title : string, genre : string, price : number, publish_date : string, description : string){
    try{ //I have no clue if this matters. I'am only used to doing things like this i guess; Everything that could cause errors here is cought in add-book-dialog
      try{
        this.onBookCreate({id, author, title, genre, price, publish_date, description});
      } catch(err){
        console.error("API error")
      }
      this.books.push(new Book(id, author, title, genre, price, publish_date, description));
    } catch (err){
      console.error("Could not create new book")
    }
  }

  deleteBook(id : string){
   this.books.forEach((book, index) => {
    if(book.id === id){
      this.books.splice(index, 1);
      console.log("uuid: " +book.id)
      this.onDeleteBook(book.id);
    }
   })
  }

  //Api communication

  fetchBooks(){
    const httpHeader: HttpHeaders = new HttpHeaders({
      'x-api-key': this.keys.API_KEY,
      'x-authorization': this.keys.AUTH_TOKEN,
      "Content-Type": "application/json"
  });

    this.http.get(this.keys.SERVICE_URI + "books", {headers: httpHeader}).pipe(map(repsonseData => {
      const tmpData = [];
      for(const key in repsonseData){
        if(repsonseData.hasOwnProperty(key)){
        tmpData.push({ ... repsonseData[key]});
        }
      }
      return tmpData;
    })).subscribe(data => {
    //  console.log(data)
      data.forEach(book => {
        this.books.push(new Book(book.id, book.author, book.title, book.genre, book.price, book.publish_date, book.description));
      })
    }, error => {
      //console.error(error);
      if(error.status == 401){
        alert("Check your AUTH_TOKEN!!");
      } else if(error.status == 403){ //This one does not work out to well, now does it ?
        alert("Invalid API_KEY");
      } else {
        alert("Unknown error");
      }

    });
    //Catch errors and stuff...
  }

  onBookCreate(data : {id : string, author: string, title: string, genre: string, price : number, publish_date : string, description : string}){
   // console.log(data);

    const httpHeader: HttpHeaders = new HttpHeaders({
      'x-api-key': this.keys.API_KEY,
      'x-authorization': this.keys.AUTH_TOKEN,
      "Content-Type": "application/json"
  });

  this.http.post(this.keys.SERVICE_URI + "books", data, {headers: httpHeader}).subscribe(res => {
    //console.log(res);
  }, error => { //401 and 403 cought on launch. You will never get here if it fails there.
   // console.error(error);
    if(error.status = 400){
      alert("Invalid payload, could not create book"); //Could be a little more informative, but CBA.
    } else {
      alert("Unknown error.. Antar att du bara är för dålig för att kasta sten :)");
    }
  });

  }

  onDeleteBook(uuid : string){
    const httpHeader: HttpHeaders = new HttpHeaders({
      'x-api-key': this.keys.API_KEY,
      'x-authorization': this.keys.AUTH_TOKEN,
  });

  this.http.delete(this.keys.SERVICE_URI + "books/" + uuid, {headers: httpHeader}).subscribe(data => {
   // console.log("Deleted book: " + data);
  }, error => { //401 and 403 cought on launch. You will never get here if it fails there... Again :)
    console.error(error)
    if(error.status == 400){
      alert("Check where you are going(invalid path)!");
    }if(error.status == 404){
      alert("Could not find said book_id"); //Should never happen.
    } else {
      alert("unknown error");
    }
  });
  }
}
