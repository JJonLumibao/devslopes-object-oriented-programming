/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }

  addGrade(grade) {
    if(grade >= 0 && grade <= 100) {
      this.grades.push(grade);
    } else {
      console.log('Grade must be between 0 and 100.');
    }
  }

  calculateAverageGrade() {
    if(this.grades.length > 0) {
      let total = 0;
      for(const grade of this.grades) {
        total += grade;
      }
      return total / this.grades.length;
    } 
    return 0;
  }

  hasPassed(passingGrade) {
    if(this.calculateAverageGrade() >= passingGrade) {
      return true;
    }
    return false;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

}

class Course {
  constructor(title) {
    this.title = title;
    this.students = [];
  }

  enrollStudent(student) {
    this.students.push(student);
  }

  listStudents() {
    console.log(this.students);
  }

  calculateCourseAverage() {
    if(this.students.length === 0) {
      return 0;
    } 
    let totalAvg = 0;
    for(const student of this.students) {
      totalAvg += student.calculateAverageGrade();
    }
    return totalAvg / this.students.length;
  }

}

// Testing
const student1 = new Student('JJ', 23);
console.log(student1);
console.log(student1.getName(), student1.getAge());
console.log(student1.calculateAverageGrade());
student1.addGrade(90);
student1.addGrade(80);
student1.addGrade(70);
console.log(student1.grades);
console.log(student1.calculateAverageGrade());
console.log(student1.hasPassed(75));
console.log(student1.hasPassed(85));
student1.addGrade(-5);
student1.addGrade(110);
const student2 = new Student('Alex', 20);
student2.addGrade(100);
student2.addGrade(90);
const student3 = new Student('Mia', 19);
student3.addGrade(60);
student3.addGrade(70);
const course1 = new Course('JavaScript 101');
console.log(course1.title);
console.log(course1.students);
console.log(course1.calculateCourseAverage());
course1.enrollStudent(student1);
course1.enrollStudent(student2);
course1.enrollStudent(student3);
console.log(course1.students);
course1.listStudents();
console.log(course1.calculateCourseAverage());