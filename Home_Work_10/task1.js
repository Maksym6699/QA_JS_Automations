import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book1 = new Book('Мандрівка в часі', 'Олександр Іваненко', 2015);
const book2 = new Book('Таємниця нічного неба', 'Марія Коваль', 2012);
const book3 = new Book('Код майбутнього', 'Ірина Гнатів', 2018);

book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook('Цифрові історії', 'Олена Петренко', 2021, 'PDF');
ebook1.printInfo();

console.log('--- Зміна властивостей через сеттери ---');
book1.year = 2020;
ebook1.fileFormat = 'EPUB';

console.log(`Оновлений рік book1: ${book1.year}`);
console.log(`Оновлений формат ebook1: ${ebook1.fileFormat}`);

const books = [book1, book2, book3, ebook1];
const oldest = Book.getOldestBook(books);
console.log('Найдавніша книга:');
oldest.printInfo();

const ebookFromBook = EBook.fromBook(book2, 'MOBI');
ebookFromBook.printInfo();
