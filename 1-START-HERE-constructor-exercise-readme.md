# Book Constructor Exercise

## Objective

Create a JavaScript constructor function called `Book` that represents a library book. Add prototype methods to manage book details and actions.

## Instructions

Follow the steps below to create the `Book` constructor and add prototype methods.

1. **Define the Constructor**  
   In your JavaScript file, start by creating a `Book` constructor function with the following properties:

   - `title` (string): The title of the book.
   - `author` (string): The author of the book.
   - `year` (number): The year the book was published.
   - `genre` (string): The genre of the book.

2. **Add getSummary Prototype Method**  
   Add a method to the Book prototype called getSummary. This method should return a string summarizing the book's title, year and genre.

3. **Add the isClassic Prototype Method**
   Add a method to the Book prototype called isClassic. This method should check if the book is over 50 years old based on the current year. If it is, return true; otherwise, return false.

4. **Add the updateYear Prototype Method**
   Add a method to the Book prototype called updateYear. This method should accept a parameter, newYear, and update the book’s year property with it. Return a confirmation message in the following format:

   - "Publication year updated to <newYear>"

5. **Add the changeGenre Prototype Method**
   Add a method to the Book prototype called changeGenre. This method should accept a parameter, newGenre, and update the book’s genre property. Return a confirmation message in the format:

   - "Genre updated to <newGenre>"

6. **Testing Your Methods**
   Now that you've created the Book constructor and its prototype methods, test them to ensure they work as expected.

   - Create an instance of Book with the following details:

     - Title: "To Kill a Mockingbird"
     - Author: "Harper Lee"
     - Year: 1960
     - Genre: "Fiction"

   - Run each of the prototype methods on book1 to confirm they work as expected.
