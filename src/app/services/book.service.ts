import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class BookService implements OnInit{
  //A few example books
  private books : Book[] = [new Book("09e9ed60-42e7-4a20-b397-d1935741733d", "author", "title","genre", 5, "01:01:2020", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at luctus lacus, at vehicula mi. Nulla eu purus sollicitudin ligula.")
,new Book("09e9ed60-46e7-4a20-b397-d1935741733d", "J.R.R Tolkien", "Lord of the Rings - the two towers","Fantasy", 19.99 , "01:01:1972", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at luctus lacus, at vehicula mi. Nulla eu purus sollicitudin ligula, whatever.")];
  booksChanged = new EventEmitter<Book[]>(); //remember this if it is needed

  constructor(private apiService : ApiService) { }

  ngOnInit(){

  }

  getBooks(){
    return this.books;
  }

  createBook(id : string, author : string, title : string, genre : string, price : number, publish_date : string, description : string){
    console.log("Create Book, yes!");
    //can do some error handling here to, but not for the purpose of this excersise.
    this.books.push(new Book(id, author, title, genre, price, publish_date, description));
  }

  deleteBook(id : string){
   this.books.forEach((book, index) => {
    if(book.id === id){
      this.books.splice(index, 1);
    }
   })
  console.log("could not delete said book");
  }
}
