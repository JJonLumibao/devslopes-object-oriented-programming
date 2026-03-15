function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

Book.prototype.getSummary = () => {
  return `${this.title} by ${this.author}, published in ${year}.`;
};

Book.prototype.isClassic = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - this.year > 50;
};

Book.prototype.updateYear = (newYear) => {
  this.year = newYear;
};

Book.prototype.changeGenre = function (newGenre) {
  this.genre = newGenre;
  return `Genre updated to ${newGenre}`;
};

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
console.log(book1.getSummary());
console.log(book1.isClassic());
console.log(book1.updateYear(1961));
console.log(book1.getSummary());
console.log(book1.changeGenre("Classic Literature"));
