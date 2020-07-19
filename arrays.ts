const carMakers = ['ford', 'chevy', 'toyota'];
const dates = [new Date(), new Date()];

const carsbyMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const newCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible Types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
