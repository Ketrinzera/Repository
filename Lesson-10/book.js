class Book {
    constructor(title, author, year) {
      this._title = title;  
      this._author = author;
      this._year = year;
    }
  
    get title() {
      return this._title;
    }
  
    set title(newTitle) {
      if (typeof newTitle === 'string' && newTitle.trim() !== '') {
        this._title = newTitle;
      } else {
        console.error('Title must be a non-empty string.');
      }
    }
  
    get author() {
      return this._author;
    }
  
    set author(newAuthor) {
      if (typeof newAuthor === 'string' && newAuthor.trim() !== '') {
        this._author = newAuthor;
      } else {
        console.error('Author must be a non-empty string.');
      }
    }
  
    get year() {
      return this._year;
    }
  
    set year(newYear) {
      if (typeof newYear === 'number' && newYear > 0) {
        this._year = newYear;
      } else {
        console.error('Year must be a positive number.');
      }
    }

    printInfo() {
      console.log(`Title: ${this._title}`);
      console.log(`Author: ${this._author}`);
      console.log(`Year: ${this._year}`);
    }
  }

  const book1 = new Book('Kafka on the Shore', 'Haruki Murakami', 2002);
  book1.printInfo();
  
  book1.title = '';  
  book1.author = ''; 
  book1.year = -200; 
  
  book1.printInfo(); 
  