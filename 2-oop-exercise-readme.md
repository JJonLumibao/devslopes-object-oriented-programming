# Student and Course Classes Exercise

## Objective

Create two JavaScript classes, `Student` and `Course`, to represent a student’s academic record and course enrollment. Add methods to manage student grades and calculate averages.

## Instructions

Follow these steps to build the `Student` and `Course` classes, add methods, and test functionality.

---

### Step 1: Define the `Student` Class

Create a `Student` class that contains the following properties and methods:

1. **Class & Constructor**

   - Parameters: `name` (string), `age` (number)
   - Properties:
     - `name` (string): The student's name
     - `age` (number): The student's age
     - `grades` (array): Stores the student’s grades as an array of numbers

2. **Add addGrade Method**
   Add an addGrade method to the Student class prototype. This method should:

   - Accept a grade parameter.
   - Check if the grade is between 0 and 100; if not, log "Grade must be between 0 and 100.".
   - Add the grade to the grades array if valid.

3. **Add calculateAverageGrade Method**
   Add a calculateAverageGrade method that:

   - Checks if there are any grades; if not, return 0.
   - Calculates and returns the average of all grades in the grades array.

4. **Add hasPassed Method**
   Add a hasPassed method that:

   - Accepts a parameter passingGrade.
   - Checks if the student's average grade meets or exceeds passingGrade.
   - Returns true if the student has passed; otherwise, returns false.

5. **Add getName and getAge Methods**
   Add two methods, getName and getAge, that return the student's name and age, respectively.

### Step 2: Define the `Course` Class

1. **Create the Course Class Constructor**
   Create a Course class that contains the following properties:

   - title (string): the name of the course
   - students (array): Stores the enrolled Student objects

2. **Add an enrollStudent Method**
   Add an enrollStudent method to the Course class that:

   - Accepts a student parameter (an instance of the Student Class).
   - Adds the student to the students array.

3. **Add an enrollStudent Method**
   Add listStudents Method

   - Logs all enrolled students in the course.

4. **Add calculateCourseAverage Method**
   Add a calculateCourseAverage method that:

   - Calculates and returns the average of all students’ average grades.
   - If no students are enrolled, return 0.

5. **Test Your Methods**
   Now, test the Student and Course classes and their methods.
