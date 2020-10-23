import { Injectable, EventEmitter } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books : Book[] = [new Book("09e9ed60-42e7-4a20-b397-d1935741733d", "author", "title","genre", 5, "01:01:2020", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at luctus lacus, at vehicula mi. Nulla eu purus sollicitudin ligula.")
,new Book("09e9ed60-46e7-4a20-b397-d1935741733d", "J.R.R Tolkien", "Lord of the Rings - the two towers","Fantasy", 19.99 , "01:01:1972", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at luctus lacus, at vehicula mi. Nulla eu purus sollicitudin ligula, whatever.")];
  booksChanged = new EventEmitter<Book[]>();

  constructor() { }

  getBooks(){
    return this.books;
  }

  createBook(){

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
