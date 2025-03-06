// Some code
const car = {
    brand: 'Ford',
    color: 'red',
    maxSpeed: 200,
    chassisNumber: 'f-1',
    drive: () => {
      console.log('driving');
    },
    reverse: () => {
      console.log('reversing');
    },
    turn: () => {
      console.log('turning');
    }
  }
  console.log(car.brand); // Ford
  console.log(car.color); // red
  console.log(car.maxSpeed); // 200
  console.log(car.chassisNumber); // f-1
  car.drive(); // driving
  car.reverse(); // reversing
  car.turn(); // turning