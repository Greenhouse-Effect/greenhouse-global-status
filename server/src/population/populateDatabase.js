import axios from 'axios';
import csv from 'csvtojson';
import path from 'path';

import { countryScraper } from "./scrapers/countryScraper.js";

export const populateCountryData = async () => {
  const data = await countryScraper();
  
  let promises = [];
  for (const row of data) {
    promises.push(
      await axios.post("http://35.92.119.149:8080/country", {
        name: row[0],
        population: row[1],
        populationYearlyChange: row[2]
      }, {
        headers: {
          'content-type': 'application/json'
        }
      }).catch((error) => {
        console.log(error);
      })
    );
  }

  await Promise.all(promises).then(console.log("COUNTRY has been populated"));
}

export const populateAtmosphericData = async () => {
  const atmosphericDataPath = path.resolve('public/emissions-temp-data.csv');
  const data = await csv().fromFile(atmosphericDataPath);

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios.post(`http://35.92.119.149:8080/atmosphericData/${row.Area}/${row.Year}`, {
        emissions: row.Emission,
        tempChange: row.TempChange
      }, {
        headers: {
          'content-type': 'application/json'
        }
      }).catch((error) => {
        console.log(error);
      })
    );
  }

  await Promise.all(promises).then(console.log("ATMOSPHERICDATA has been populated"));
}

export const populateLandData = async () => {
  const landDataPath = path.resolve('public/land-water-data.csv');
  const data = await csv().fromFile(landDataPath);

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios.post(`http://35.92.119.149:8080/landData/${row.Country}/2021`, {
        landArea: row.Land,
        waterWithdrawal: row.Water
      }, {
        headers: {
          'content-type': 'application/json'
        }
      }).catch((error) => {
        console.log(error);
      })
    );
  }  

  await Promise.all(promises).then(console.log("LANDDATA has been populated"));
}

export const populateSocietalData = async () => {
  const societalDataPath = path.resolve('public/hdi-gni-data.csv');
  const data = await csv().fromFile(societalDataPath);

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios.post(`http://35.92.119.149:8080/societalData/${row.Country}/2021`, {
        hdi: row.HDI,
        gni: row.GNI
      }, {
        headers: {
          'content-type': 'application/json'
        }
      }).catch((error) => {
        console.log(error);
      })
    );
  }

  await Promise.all(promises).then(console.log("SOCIETALDATA has been populated"));
}

export const populateEnergyData = async () => {
  const energyDataPath = path.resolve('public/energy-consumption-data.csv');
  const data = await csv().fromFile(energyDataPath);

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios.post(`http://35.92.119.149:8080/energyData/${row.Area}/${row.Year}`, {
        naturalGas: row.NaturalGas,
        fuelOil: row.FuelOil,
        coal: row.Coal
      }, {
        headers: {
          'content-type': 'application/json'
        }
      }).catch((error) => {
        console.log(error);
      })
    );
  }

  await Promise.all(promises).then(console.log("ENERGYDATA has been populated"));
}

export const populateDisasterData = async () => {
  const disasterDataPath = path.resolve('public/natural-disasters.csv');
  const data = await csv().fromFile(disasterDataPath);

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios.post(`http://35.92.119.149:8080/disasterData/${row.Country}/${row.Year}`, {
        deaths: row.Deaths,
        homelessness: row.Homelessness,
        economicDamages: row.Economic
      }, {
        headers: {
          'content-type': 'application/json'
        }
      }).catch((error) => {
        console.log(error);
      })
    );
  }

  await Promise.all(promises).then(console.log("DISASTERDATA has been populated"));
}

export const populateDiseaseData = async () => {
  const diseaseDataPath = path.resolve('public/disease-data.csv');
  const data = await csv().fromFile(diseaseDataPath);

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios.post(`http://35.92.119.149:8080/diseaseData/${row.Country}/${row.Year}`, {
        rabies: row.Rabies,
        malaria: row.Malaria,
        infection: row.Infection
      }, {
        headers: {
          'content-type': 'application/json'
        }
      }).catch((error) => {
        console.log(error);
      })
    );
  }

  await Promise.all(promises).then(console.log("DISEASEDATA has been populated"));
}

export const populateFoodData = async () => {
  const foodDataPath = path.resolve('public/food-data.csv');
  const data = await csv().fromFile(foodDataPath);

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios.post(`http://35.92.119.149:8080/foodData/${row.Area}/${row.Year}`, {
        rice: row.Rice,
        corn: row.Corn,
        wheat: row.Wheat
      }, {
        headers: {
          'content-type': 'application/json'
        }
      }).catch((error) => {
        console.log(error);
      })
    );
  }

  await Promise.all(promises).then(console.log("FOODDATA has been populated"));
}
