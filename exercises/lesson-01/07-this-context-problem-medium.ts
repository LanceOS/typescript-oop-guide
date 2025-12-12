/**
 * Exercise 4: The 'this' Context Problem (Medium)
 *
 * Create a Timer class that demonstrates the 'this' context problem
 * and solutions using arrow functions and .bind()
 *
 * See README.md for full requirements and example usage.
 */

// Your code here

class Timer {
  constructor(public seconds: number = 0, public isRunning: boolean = false) {}

  public tickArrow() {
    if(!this.isRunning) {

    }
    const time: Date = new Date();
    console.log(time.toLocaleString());
  }

  public start() {
    this.tickArrow()  
  }

  public stop() {
    this.isRunning = false;    
  }

  public getTime() {
    return this.seconds;
  }

  public reset() {
    this.seconds = 0;
    return "Seconds has been set to zero."
  }
}



