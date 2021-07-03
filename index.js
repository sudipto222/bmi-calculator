const data = require('./data.json');

const range = [
  {range: '0-18.4', category: 'Underweight', helth_risk: 'Malnutrition risk'},
  {range: '18.5-24.9', category: 'Normal weight', helth_risk: 'Low risk'},
  {range: '25-29.9', category: 'Overweight', helth_risk: 'Enhanced risk'},
  {range: '30-34.9', category: 'Moderately obese', helth_risk: 'Medium risk'},
  {range: '35-39.9', category: 'Severely obese', helth_risk: 'High risk'},
  {range: '40-100', category: 'Very severely obese', helth_risk: 'Very high risk'},
];

let table = [];

data.forEach(({ Gender, HeightCm, WeightKg}) => {
  let index, data,
    cm_to_m = HeightCm / 100,
    BMI = (WeightKg / (cm_to_m * cm_to_m)).toFixed(2);

  if(BMI < 18.4){
    index = 0;
  } else if(BMI < 24.9) {
    index = 1;
  } else if(BMI < 29.9) {
    index = 2;
  } else if(BMI < 34.9) {
    index = 3;
  } else if(BMI < 39.9) {
    index = 4;
  } else {
    index = 5;
  }

  data = range[index];
  data.bmi = BMI;

  table.push(data);

})

const  getByCategory = (payload) => {
  let count = 0;
  table.forEach(({category}) => {
    if (category == payload){
      count++;
    }
  })
  return count;
}

console.table(table)
module.exports = getByCategory;