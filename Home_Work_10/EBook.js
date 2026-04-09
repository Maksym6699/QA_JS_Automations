import { Book } from './Book.js';

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Формат файлу повинен бути непорожнім рядком');
    }
    this._fileFormat = value.trim();
  }

  printInfo() {
    console.log(`Електронна книга: "${this.title}"; Автор: ${this.author}; Рік видання: ${this.year}; Формат файлу: ${this.fileFormat}`);
  }

  static fromBook(book, format) {
    if (!(book instanceof Book)) {
      throw new Error('Перший аргумент має бути екземпляром Book');
    }
    return new EBook(book.title, book.author, book.year, format);
  }
}

export { EBook };
