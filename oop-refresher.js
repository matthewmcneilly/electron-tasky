class Car {
  /*
    constructor function automatically called new keyword is used
    used for inital setup/config
    recieves wheels as an arugment
  */
  constructor(options) {
    this.wheels = options.wheels;
    this.type = 'car';
  }

  drive() { // a method of the car class
    return 'Im driving!';
  }
}

const car = new Car({ wheels: 4 }); // creates new instance of the car class
car.type; // car is returned
car.drive(); // calls the drive method and Im driving is returned
car.wheels; // 4 is returned

// borrows all the functionality of the car class, honda is a subclass
class Honda extends Car {
  constructor(options) {
    super(options); // calls the car classes constructor function

    this.model = options.model; // honda class requires a model
  }
}

// creates an instance of the honda class and passes a number of options
const accord = new Honda({ model: 'accord', wheels: 4 });
accord.wheels; // returns 4
accord.model; // returns accord 
