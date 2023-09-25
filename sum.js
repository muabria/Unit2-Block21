class Car {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    CarDescription() {
        return `This car has ${this.make} make, ${this.model} model, and is ${this.year} year.`;
    }
};

class ElectricCar extends Car {
    constructor (make, model, year, range) {
        super (make, model, year);
        this.range = range;
    }
    ElectricCarInfo() {
        return `${super.CarDescription()} It has a ${this.model} model, is ${this.year} year, and can travel ${this.range} range.`;
    }
};

class ElecticCar {
    constructor (make, model, year, range) {
        this.make = Tesla;
        this.model = modelS;
        this.year = 2019;
        this.range = 300;
    }
    CarDescription() {
        return `${super.CarDescription()} It has a ${this.model} model, is ${this.year} year, and can travel ${this.range} range.`;
    }
};
const ElectricCar = new Tesla;
console.log(ElectricCar.ElectricCarInfo())