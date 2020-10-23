import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddBookDialogComponent } from '../dialogs/add-book-dialog/add-book-dialog.component';

export interface dialogData{
  title : string;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  title : string;

  books : Book[] = [];

  constructor(private bookService : BookService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();

    this.bookService.booksChanged.subscribe(); //don't forget this if you need it
  }

  createBookDialog(): void {
    const config = new MatDialogConfig;

    config.width = '300px';
    config.disableClose = false; //standard?
    config.autoFocus = true;
    config.closeOnNavigation = true;

    config.data = {
      title:"test"
    };
    //Probably don't need the ref, just inject the bookService into the dialogComponent. We'll see
    const dialogRef = this.dialog.open(AddBookDialogComponent, config);
  }

  //I want id as the deletion chriteria, since that is definetly uniqe(?).
  deleteBook(name : string, id : string){
    if(confirm("Are you sure you want to delete: " + name)){
      this.bookService.deleteBook(id);
    } else {
      console.log("You ain't got the ballz to delete " + name);
    }
  }

}
