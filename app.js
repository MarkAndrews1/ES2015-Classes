//1.
  class Vehicle{
    constructor(mk, md, yr) {
        this.make = mk;
        this.model = md;
        this.year = yr;
    }
    honk() {
        return "Beep."
    }
    toString() {
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
  }

//2.
  class Car extends Vehicle {
    constructor(mk, md, yr) {
        super(mk, md, yr)
        this.numWheels = 4
    }
  }

//3.
  class Motorcycle extends Vehicle {
    constructor(mk, md, yr) {
        super(mk, md, yr)
        this.numWheels = 2
    }
    revEngine() {
        return "VROOM!!!"
    }
  }

//4.
  class Garage{
    constructor(limit) {
        this.vehicle = [];
        this.capacity = limit;    
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed here!"
        }
        if(this.vehicle.length >= this.capacity) {
            return "No more room!"
        }
        this.vehicle.push(newVehicle)
        return "Vehicle added!"
    }
  }