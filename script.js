function Human(name, gender){
    this.name = name;
    this.gender = gender;
    
    this.getInfo = function() {
        console.log("Name:", this.name, "| Gender:", this.gender);
    };
}

const human1 = new Human('Chris', 'Male');
const human2 = new Human('Kate', 'Female');
human1.getInfo();
human2.getInfo();

function Apartment() {
    this.residents = [];
    this.addResident = function(human) {
        this.residents.push(human)
        console.log(this.residents);
    };
}

const room = new Apartment();
room.addResident([human1, human2])

function House(maxValue){
    this.maxValue = maxValue;
    this.rooms = [];
    this.addRoom = function(apartment) {
        if (this.maxValue >= 4){
            console.log('Error')
        } else {
            this.rooms.push(apartment)
            console.log(this.rooms)
        }
    }
}

const room1 = new Apartment();
const house = new House(3); // maximum 3 rooms

house.addRoom(room); // ok
house.addRoom(room); // ok
house.addRoom(room); // ok
house.addRoom(room); // should log error

// Так мабуть теж можна)
// const apart1 = new House(2)
// apart1.addRoom([room, room, room, room])
// const apart2 = new House(4)
// apart2.addRoom([room, room])