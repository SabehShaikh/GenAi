// Question 80: Updating Object Properties: Add a property named color to the existing car object,
//  and then update the year property to 2021. Show how to perform these operations.

let car: { make: string; model: string; year: number; color?: string } = {
  make: "honda",
  model: "civic",
  year: 2023,
};

car.color = "red"; // Adds a new property 'color'
car.year = 2021;  // Updates the 'year' property
console.log(car);
