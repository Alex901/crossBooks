export class Book {
  public id : string;
  public author : string;
  public title : string;
  public genre : string;
  public price : number;
  public publish_date : string;
  public description : string;

  constructor(id : string, author : string, title : string, genre : string, price : number, publish_date : string, description : string){
    this.id = id;
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.price = price;
    this.publish_date = publish_date;
    this.description = description;
  }
}
