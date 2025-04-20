import EBook from './ebook.js';

const myEBook = new EBook("Kafka on the Shore", "Haruki Murakami", 1845, "PDF");
myEBook.printInfo();

myEBook.title = "New Title"; 
myEBook.author = "New Author"; 
myEBook.year = 2021; 
myEBook.fileFormat = "EPUB";  
myEBook.printInfo(); 

myEBook.title = "";  
myEBook.year = -5;  
myEBook.fileFormat = "DOCX";  