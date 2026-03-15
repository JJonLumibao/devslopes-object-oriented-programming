class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }

  addGrade(grade) {
    if (grade < 0 || grade > 100) {
      console.log("Grade must be between 0 and 100.");
      return;
    }
    this.grades.push(grade);
    console.log(`Added grade ${grade} for student ${this.name}.`);
  }

  calculateAverageGrade() {
    if (this.grades.length === 0) return 0;
    const total = this.grades.reduce((acc, grade) => acc + grade, 0);
    return total / this.grades.length;
  }

  hasPassed(passingGrade) {
    return this.calculateAverageGrade() >= passingGrade;
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
    console.log(`Enrolled ${student.getName()} in ${this.title}.`);
  }

  listStudents() {
    console.log(`Students in ${this.title}:`);
    this.students.forEach((student) => {
      console.log(
        `- ${student.getName()}, Age: ${student.getAge()}, Average Grade: ${student.calculateAverageGrade()}`
      );
    });
  }

  calculateCourseAverage() {
    if (this.students.length === 0) return 0;
    const totalGrades = this.students.reduce(
      (acc, student) => acc + student.calculateAverageGrade(),
      0
    );
    return totalGrades / this.students.length;
  }
}

const htmlCourse = new Course("HTML & CSS");
const studentBeanie = new Student("Beanie", 20);
const studentNathan = new Student("Nathan", 22);

htmlCourse.enrollStudent(studentBeanie);
htmlCourse.enrollStudent(studentNathan);

studentBeanie.addGrade(85);
studentBeanie.addGrade(90);
studentNathan.addGrade(75);
studentNathan.addGrade(80);

htmlCourse.listStudents();
console.log(
  `Average grade for ${course.title}: ${course.calculateCourseAverage()}`
);
