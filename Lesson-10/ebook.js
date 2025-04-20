import Book from './book.js';  

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

export default EBook;