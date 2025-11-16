/*
 * Exercise 4: Object Interactions (Medium)
 *
 * Create two classes:
 * 1. Student - manages student enrollment
 * 2. Course - manages course capacity and students
 *
 * These classes should interact with each other.
 * See README.md for full requirements and example usage.
 */

// Your code here
//

class Student {
  constructor(public name: string, public studentId: string, public enrolledCourses: string[] = []) {};
  
  public enroll(courseNames: string[]) {
    return this.enrolledCourses.push(...courseNames)      
  };

  public drop(courseName: string) {
    let newArr: string[] = [];
    let enrolled = this.enrolledCourses;
    if(enrolled.length <= 0) {
      throw new Error("Studen is not taking any courses!")
    };
    for(let i = 0; i < enrolled.length; i++) {
      if(courseName === enrolled[i]) {
        continue;
      }
      else {
        newArr.push(enrolled[i])
      }
    };
    
    return this.enrolledCourses = newArr;
  };

  public listCourses() {};

  public isEnrolledIn(courseName: string) {};
};

class Course {
  constructor(
    public courseName: string,
    public instructor: string,
    public students: string[] = [],
    public maxCapacity: number,
  ) {};

  public addStudent(student: Student) {
    student.enrolledCourses.push(this.courseName);
    return this.students.push(student.name)
  };

  public removeStudent(student: Student) {
    student.drop(this.courseName); 
    return this.students.filter(item => item === student.name);
  };

  public getEnrollmentCount() {
    return this.students.length;
  };

  public isFull() {
    if(this.students.length === this.maxCapacity) {
      return "Course is full";
    };
  };
};


const student1 = new Student("Steve", "9294");
const student2 = new Student("Frank", "9113");

const course = new Course("Typescript 101", "Dr. Smith", [], 2);

console.log("Adding student:", course.addStudent(student1));
console.log("Adding student:", course.addStudent(student2));

console.log("Current Course:", course);

console.log(student1);
console.log(student2);

console.log("Removing student:", course.removeStudent(student1));

// Logging student after course removal
console.log(student1)





