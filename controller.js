const data = require("./data");

class Controller {
  constructor(){
    this.range = {
      'U': { id: 'U', range: '0-18.4', category: 'Underweight', health_risk: 'Malnutrition risk' },
      'NW': { id: 'NW', range: '18.5-24.9', category: 'Normal weight', health_risk: 'Low risk' },
      'O': { id: 'O', range: '25-29.9', category: 'Overweight', health_risk: 'Enhanced risk' },
      'MO': { id: 'MO', range: '30-34.9', category: 'Moderately obese', health_risk: 'Medium risk' },
      'SO': { id: 'SO', range: '35-39.9', category: 'Severely obese', health_risk: 'High risk' },
      'VSO': { id: 'VSO', range: '40-100', category: 'Very severely obese', health_risk: 'Very high risk' },
    };
  }


  // getting all data
  async getDatas() {
    // return all data
    return new Promise((resolve, _) => {
      let datas = this.calculateBMI(data);
      resolve(datas)
    });
  }

  async getDatasByCategory(payload) {
    // return all data by cat
    return new Promise((resolve, _) => {
      let datas = this.calculateBMI(data);
      let filterByCat = this.getByCategory(payload, datas);
      resolve(filterByCat)
    });
  }

  getByCategory(payload, table){
    return table.filter(({ id }) => {
      return id == payload;
    });
  }

  calculateBMI(datas) {
    let table = [];
    datas.forEach(({ Gender, HeightCm, WeightKg }) => {
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

      data = this.range[cat];
      data.bmi = BMI;
      table.push(data);
    })

    return table;
  }
}
module.exports = Controller;