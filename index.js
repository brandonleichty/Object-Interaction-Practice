/*
The purpose of this project is to practice working classes and subclasses. My goal is to build a model for Apple employees
using the ES6 'class' syntax. With the intent of trying to re-recreate the same thing using the OLOO (Objects Linked to Other Objects) model.

*/

// An array that that all employees are held in.
const employeeDatabase = [];

// A closure that incerases the badge number count. Re-visit this after reading "You Don't Know JS: Closure".
function badgeNumberInceaser() {
  let i = 1;
  function inner() {
    return i++;
  }
  return inner;
}

const newBadgeNumber = badgeNumberInceaser();

// This is the superclass/base class for all Apple employees.

class AppleEmployee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.vacationBalance = 0;
    this.sickTimeBalance = 0;
    this.payRate = 0;
    this.badgeNum = newBadgeNumber()
      .toString()
      .padStart(4, "0");
    this.email = firstName
      .charAt(0)
      .concat(lastName, "@apple.com")
      .toLowerCase();

    console.log(
      `A new employee named ${this.firstName} ${this.lastName} with the email ${
        this.email
      } has been added to Apple Directory.`
    );
    employeeDatabase.push(this);
  }

  logEmail() {
    console.log(`The email for ${this.firstName} is ${this.email}.`);
  }
}

// Apple Specialist subclass

class Specialist extends AppleEmployee {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.easyPayAccess = true;
  }

  checkOut() {
    console.log("I've just helped someone buy a new iPhone");
  }
}

// Expert subclass

class Expert extends Specialist {
  constructor(firstNasme, lastName) {
    super(firstNasme, lastName);
  }

  faciliateDownload() {
    console.log(`Hello everyone, I'm doing a Download today!`);
  }
}

class Manager extends Expert {
  constructor(firstName, lastName, payRate) {
    super(firstName, lastName, payRate);
  }

  increasePay(employee, payIncreaseAmount) {
    employee.payRate = +payIncreaseAmount;
    console.log(
      `${
        employee.firstName
      } received a raise of $${payIncreaseAmount}. They now make $${
        employee.payRate
      } per hour.`
    );
  }
}

// Log something to the console to ensure JS loaded
console.log("Employee management stystem is ready for use!");
