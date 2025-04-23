// Клас Book
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

    static findOldestBook(booksArray) {
      if (Array.isArray(booksArray) && booksArray.length > 0) {
        return booksArray.reduce((oldest, currentBook) => {
          return (oldest.year < currentBook.year) ? oldest : currentBook;
        });
      }
      console.error('Input must be an array of books.');
      return null;
    }
  }

  class EBook extends Book {
    constructor(title, author, year, fileFormat) {
      super(title, author, year);  
      this._fileFormat = fileFormat;  
    }
  
    get fileFormat() {
      return this._fileFormat;
    }
  
    set fileFormat(newFormat) {
      const validFormats = ['PDF', 'EPUB', 'MOBI', 'TXT'];
      if (validFormats.includes(newFormat.toUpperCase())) {
        this._fileFormat = newFormat.toUpperCase(); 
      } else {
        console.error('Invalid file format. Valid formats are: PDF, EPUB, MOBI, TXT.');
      }
    }
  
    printInfo() {
      super.printInfo(); 
      console.log(`File Format: ${this.fileFormat}`);
    }
  }
 
  const book1 = new Book('Kafka on the Shore', 'Haruki Murakami', 2002);
  const book2 = new Book('Cyrano de Bergerac', 'Edmond Rostand', 1997);
  const book3 = new EBook('Caesar and Cleopatra', 'George Bernard Shaw', 2000, 'PDF');
  const book4 = new EBook('Digital Fortress', 'Dan Brown', 1998, 'EPUB');
  
  const books = [book1, book2, book3, book4];
  
  const oldestBook = Book.findOldestBook(books);
  console.log('The oldest book is:');
  oldestBook.printInfo();
  