/* Please read the instructions located in the 1-constructor-exercise-readme.md file and complete your code below */ 
function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

Book.prototype.getSummary = function() {
  return `${this.title} was made in ${this.year}. It's genre is ${this.genre}.`;
}

Book.prototype.isClassic = function() {
  if(2026 - this.year > 50) {
    return true;
  }
  return false;
}

Book.prototype.updateYear = function(newYear) {
  return `Publication year updated to ${newYear}`;
}

Book.prototype.changeGenre = function(newGenre) {
  return `Genre updated to ${newGenre}`;
}

// Testing
const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction');
console.log(book1);
console.log(book1.getSummary());
console.log(book1.isClassic());
console.log(book1.updateYear(2000));
console.log(book1.changeGenre('Adventure'));

