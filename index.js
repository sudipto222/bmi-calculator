const fs = require('fs');

const range = {
  'U' : {range: '0-18.4', category: 'Underweight', helth_risk: 'Malnutrition risk'},
  'NW' : {range: '18.5-24.9', category: 'Normal weight', helth_risk: 'Low risk'},
  'O' : {range: '25-29.9', category: 'Overweight', helth_risk: 'Enhanced risk'},
  'MO' : {range: '30-34.9', category: 'Moderately obese', helth_risk: 'Medium risk'},
  'SO' : {range: '35-39.9', category: 'Severely obese', helth_risk: 'High risk'},
  'VSO' : {range: '40-100', category: 'Very severely obese', helth_risk: 'Very high risk'},
};
let table = [];

fs.readFile('./data.json', 'utf-8', (err, data) => {
  if (err) throw err
  data = JSON.parse(data);
  calculateBMI(data);
})


async function calculateBMI(data){
  data.forEach(({ Gender, HeightCm, WeightKg}) => {
    let cat, data,
      cm_to_m = HeightCm / 100,
      BMI = (WeightKg / (cm_to_m * cm_to_m)).toFixed(2);

    switch (true) {
      case (BMI < 18.4):
        cat = 'U';
        break;
      case (BMI < 24.9):
        cat = 'NW';
        break;
      case (BMI < 29.9):
        cat = 'O';
        break;
      case (BMI < 34.9):
        cat = 'MO';
        break;
      case (BMI < 39.9):
        cat = 'SO';
        break;
      default:
        cat = 'VSO';
        break;
    }

    data = range[cat];
    data.bmi = BMI;

    table.push(data);

  })
   console.table(table)
}

const getByCategory = (payload) => {
  let count = 0;
  table.forEach(({category}) => {
    if (category == payload){
      count++;
    }
  })
  return count;
}

module.exports = getByCategory;
