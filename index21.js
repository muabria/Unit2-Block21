
class Car { 
    constructor(make, model,year){
        this.make = make;
        this.model = model; 
        this.year = year;
    }
    getDescription() {
        return `This Car has a $(this.make) setup, modeled by $(this.model) and created in $(this.year)`;

    }
}   console.log(getDescription)

class ElectricCar extends Car {
    constructor(make, model,year, range){
    super(make, model, year);
    this.range = 300;
    this.make = "Tesla";
    this.model = "Model S"
    this.year = "Year 2019"
    }
    getDescription() { 
        return `This Car has a $(this.make) setup, modeled by $(this.model) and created in $(this.year) with a range of $(this.range)`;

    }
}
console.log(getDescription)
