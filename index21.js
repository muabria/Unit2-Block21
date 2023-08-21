// Define Car and constructor - make, model, year 
//have a Return with information on car
class Car { 
    constructor(make, model, year){
        this.make = make;
        this.model = model; 
        this.year = year;
    }
    getDescription() {
        return `This Car has a $(this.make) setup, 
        modeled by $(this.model),
        created in $(this.year)`;

    }
}; 


//ElectricCar is subclass
//ADD this.range = range
class ElectricCar extends Car {
    constructor(make, model, year, range){
    super(make, model, year);
    this.range = range;
    }

//ElectricCar prototype should ovverride the getDescription method w/ NEW implementations
//override return with '$(super.)

    getDescription() { 
        return `${super.getDescription()} 
        This Car also has a range of $(this.range)`;

    }
};

// Create an instance of ElectricCar
// add in Make: Tesla, Model: Model S, Year: 2019, and Range: 300
// Output should be a string containing the model, make, year, and range of ElectricCar.

const electricCar = new ElectricCar ("Tesla","Model S", 2019, 300);

console.log(electricCar.getDescription());