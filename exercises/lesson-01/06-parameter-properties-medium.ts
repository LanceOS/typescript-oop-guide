/**
 * Exercise 3: Parameter Properties (Medium)
 *
 * Create a Task class using parameter property shorthand.
 * Mix public and private parameter properties with regular properties.
 *
 * See README.md for full requirements and example usage.
 */

// Your code here
//


class Task {
  constructor(
    private readonly id: number,
    public title: string,
    private assignedTo: string,
    public createdAt: Date = new Date(),
    public completed: boolean = false
  ) {};

  public setAssignment(username: string) {
    return this.assignedTo = username;
  };

  public complete() {
    this.completed = true;
    return this.completed;
  };

  public isAssignedTo(username: string) {
    if(this.assignedTo === username) {
      return true;
    }
    else {
      return false;
    };
  };
  
  public getStatus() {
    return `Task is assigned to ${this.assignedTo}. Status: ${this.completed ? "Completed" : "Incomplete"}`; 
  };
};

const task1 = new Task(1, "Write Documents", "Jake");
const task2 = new Task(2, "Review PR", "Frank");


console.log(task1.getStatus());
console.log(task2.getStatus());

console.log(task1.setAssignment("Steve"));
console.log("Getting status after change", task1.getStatus());

console.log(task1.isAssignedTo("Steve"));
console.log(task1.complete());
console.log(task1.getStatus());




