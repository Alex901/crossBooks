import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books : Book[] = [new Book(1, "author", "title","genre", 5, "01:01:2020", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at luctus lacus, at vehicula mi. Nulla eu purus sollicitudin ligula.")];

  constructor() { }

  getBooks(){
    return this.books;
  }
}
