class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Назва повинна бути непорожнім рядком');
    }
    this._title = value.trim();
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Автор повинен бути непорожнім рядком');
    }
    this._author = value.trim();
  }

  get year() {
    return this._year;
  }

  set year(value) {
    const numericYear = Number(value);
    if (!Number.isInteger(numericYear) || numericYear <= 0) {
      throw new Error('Рік видання має бути додатнім цілим числом');
    }
    this._year = numericYear;
  }

  printInfo() {
    console.log(`Книга: "${this.title}"; Автор: ${this.author}; Рік видання: ${this.year}`);
  }

  static getOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error('Потрібен масив обʼєктів книг');
    }

    return books.reduce((oldest, current) => {
      if (!(current instanceof Book)) {
        throw new Error('У масиві має бути лише екземпляри Book або EBook');
      }
      return current.year < oldest.year ? current : oldest;
    }, books[0]);
  }
}

export { Book };
