/**
 * Exercise 2: Static Constants (Easy)
 *
 * Create a Temperature class with static constants and
 * static utility methods for temperature conversion.
 *
 * See README.md for full requirements and example usage.
 */

// Your code here

class Temperature {
  public static readonly FREEZING_POINT_C = 0;
  public static readonly BOILING_POINT_C = 100;
  public static readonly ABSOLUTE_ZERO_C = -273.15;

  constructor(public celsius: number) {}

  public static celsiusToFehrenheit(celsius: number) {
    return (celsius * 9) / 5 + 32;
  }

  public static fahrenheitToCelsius(fahrenheit: number) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  public static celsiusToKelvin(celsius: number) {
    return celsius + 273.15;
  }

  public static kelvinToCelsius(kelvin: number) {
    return kelvin - 273.15;
  }

  public toFahrenheit() {
    return Temperature.celsiusToFehrenheit(this.celsius);
  }

  public toKelvin() {
    return Temperature.celsiusToKelvin(this.celsius);
  }
}

console.log(Temperature.celsiusToFehrenheit(0));
console.log(Temperature.celsiusToFehrenheit(100));
console.log(Temperature.fahrenheitToCelsius(32));

console.log(Temperature.FREEZING_POINT_C);
console.log(Temperature.BOILING_POINT_C);

const temp = new Temperature(25);

console.log(temp.toFahrenheit());
console.log(temp.toKelvin());
