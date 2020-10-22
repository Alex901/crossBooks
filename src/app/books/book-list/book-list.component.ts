import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  deleteBook(){
    alert("Delete this book plz")

  }

}
