function sum(a, b) {
    return a + b;
  }
  module.exports = sum;



  class Home {
    constructor (rooms, bathrooms, squareFeet) {
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.squareFeet = squareFeet;
    }
    homeInfo() {
        return `This home has ${this.rooms} rooms, ${this.bathrooms} bathrooms, and is ${this.squareFeet} square feet.`;
    }
};
class SingleFamilyHome extends Home {
    constructor (rooms, bathrooms, squareFeet, yardSize) {
        super (rooms, bathrooms, squareFeet);
        this.yardSize = yardSize;
    }
    homeInfo() {
        return `${super.homeInfo()} It has a ${this.yardSize} square foot yard.`
    }
};
class Apartment extends Home {
    constructor (rooms, bathrooms, squareFeet, floor) {
        super (rooms, bathrooms, squareFeet);
        this.floor = floor;
    }
    homeInfo() {
        return `${super.homeInfo()} It is on floor ${this.floor}.`
    }
}
const myApartment = new Apartment (3, 4, 500, 6);
console.log(myApartment.homeInfo())