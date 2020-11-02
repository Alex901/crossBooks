import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddBookDialogComponent } from '../dialogs/add-book-dialog/add-book-dialog.component';

export interface dialogData{ //This is not even needed...
  title : string;
  author : string;
  genre : string;
  uuid : string;
  description : string;
  publish_date : string;
  price : number;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books : Book[] = [];
  term : string; //tmp, view from nav-header

  constructor(private bookService : BookService, public dialog: MatDialog) { 
    this.bookService.currentSearch.subscribe(search => this.term = search);
    console.log("Book-list: " + this.term);
   }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    console.log(this.books);
  }

  createBookDialog(): void {
    const config = new MatDialogConfig;

    config.width = '400px';
    config.autoFocus = true;
    config.closeOnNavigation = true;

    //Example values to make testing easier
    config.data = { //Just testing stuff out, don't mind this uggly piece of ****! :)
      uuid: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", //Not needed
      title:"Crime and Punishment",
      author:"Dostoyevsky, Fyodor ",
      genre:"Philosophy",
      price: 25.99,
      publish_date: "1866-01-01T00:00:00Z",
      description:"A man murders people and ponders weather it was the right moral choice or not. He is supperior to other people after all? Isn't he?"
    };
    //Probably don't need the ref, just inject the bookService into the dialogComponent. We'll see
    this.dialog.open(AddBookDialogComponent, config);


  }

  //I want id as the deletion chriteria, since that is definetly uniqe(?).
  deleteBook(name : string, id : string){
    if(confirm("Are you sure you want to delete: " + name)){
      this.bookService.deleteBook(id);
    } else {
      console.log("You ain't got the balls to delete " + name);
    }
  }

}
