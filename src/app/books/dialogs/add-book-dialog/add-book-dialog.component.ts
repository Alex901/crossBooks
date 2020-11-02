import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup  } from '@angular/forms';
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
    this.title = data.title;
    this.author = data.author;
    this.genre = data.genre;
    this.price = data.price;
    this.publish_date = data.publish_date;
    this.description = data.description;
    this.uuid = data.uuid;
  }

  //TODO: Data constraints ?
  //TODO: Date selector ? x
  //TODO: Disable submit if required values are empty! ~
  //TODO: Time Formatter

  ngOnInit(){
  }

  close(){
    this.dialogRef.close();
    console.log("Dialog closed without saving");
  }

  submit(){
    // Yeah, um. Don't do like this! But it works here, so... :'D
    console.log("publish_date: " + this.publish_date);
    if(this.title == ''){
      alert("Please enter the books title!");
    } else if(this.author == ''){
      alert("Please enter Author name!");
    } else if(this.genre == ''){
      alert("please select a genre!");
    } else if(this.price == null){
      alert("Enter a price!");
    } else if(this.publish_date == ''){
      alert("Select a date");
    }
    else {
      if(this.description == ''){
        this.description = "No description, you will probably like it!";
      }
    this.bookService.createBook(this.uuid, this.author, this.title, this.genre, this.price, this.publish_date, this.description);
    this.dialogRef.close();
    }
  }

}
