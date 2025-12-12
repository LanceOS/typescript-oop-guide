/**
 * Exercise 1: Static Properties (Easy)
 *
 * Create a Car class that uses static properties to track
 * the total number of cars created.
 *
 * See README.md for full requirements and example usage.
 */

// Your code here
class Car {
  public static totalCars: number = 0;

  constructor(
    public brand: string,
    public model: string,
    private readonly carId: number = Car.totalCars++,
  ) {
    Car.totalCars++;
  }

  public static getTotalCars() {
    return Car.totalCars;
  }

  public getInfo() {
    return `Car #${this.carId}: ${this.brand} ${this.model}`;
  }
}

const car1 = new Car("Toyota", "Dolphin");
console.log(car1);
console.log(Car.totalCars);
