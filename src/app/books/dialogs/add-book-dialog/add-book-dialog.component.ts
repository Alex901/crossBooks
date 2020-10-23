import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dialogData } from '../../book-list/book-list.component';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.scss']
})
export class AddBookDialogComponent implements OnInit {
  form : FormGroup;
  title : string;

  constructor(public dialogRef : MatDialogRef<AddBookDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: dialogData ) {
    this.title = data.title;
  }

  ngOnInit(): void {

  }

  submit(){
    this.dialogRef.close(this.form.value);
  }

  close(){
    this.dialogRef.close();
  }

}
