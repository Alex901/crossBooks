import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public term : string;

  constructor(private bookService : BookService) {
    this.bookService.currentSearch.subscribe(search => this.term = search);
    console.log("Nav-Search: " + this.term);
  }

  ngOnInit(): void {
    
  }

  newSearch(){
    this.bookService.updateSearchTerm(this.term);
  }

}
