
class Car { 
    constructor(make, model,year){
        this.make = make;
        this.model = model; 
        this.year = year;
    }
    getDescription() {
        return `This Car has a $(this.make) setup, modeled by $(this.model) and created in $(this.year)`;

    }
}