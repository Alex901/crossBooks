import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, NgForm, Validators,  FormBuilder, FormGroup  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dialogData } from '../../book-list/book-list.component';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.scss']
})
export class AddBookDialogComponent implements OnInit {
  form : FormGroup;
  uuid : string;
  title : string;
  author : string;
  genre : string;
  price : number;
  publish_date : string;
  description : string;

  constructor(public dialogRef : MatDialogRef<AddBookDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: dialogData, private bookService : BookService) {
    this.uuid = data.uuid;
    this.title = data.title;
    this.author = data.author;
    this.genre = data.genre;
    this.price = data.price;
    this.publish_date = data.publish_date;
    this.description = data.description;
  }

  //TODO: Data constraints ?
  //TODO: Date selecter ?
  //TODO: Disable submit if required values are empty!

  ngOnInit(){
  }

  close(){
    this.dialogRef.close();
    console.log("Dialog closed without saving");
  }

  submit(){
    // Yeah, um. Don't do like this! :'D
    this.bookService.createBook(this.uuid, this.author, this.title, this.genre, this.price, this.publish_date, this.description);
    this.dialogRef.close();
  }

}
