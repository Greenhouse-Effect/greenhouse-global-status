import axios from 'axios';
import csv from 'csvtojson';
import path from 'path';

import { countryScraper } from "./scrapers/countryScraper.js";

export const populateCountryData = async () => {
  const data = await countryScraper();
  
  for (const row of data) {
    axios.post("http://localhost:3002/country", {
      name: row[0],
      population: row[1],
      populationYearlyChange: row[2]
    }).catch((error) => {
      console.log(error);
    });
  }
}

export const populateAtmosphericData = async () => {
  const temperatureDataPath = path.resolve('public/temperature-data.csv');
  const temperatureData = await csv().fromFile(temperatureDataPath);

  for (const row of temperatureData) {
    axios.post(`http://localhost:3002/atmosphericData/${row.Area}/${row.Year}`, {
      emissions: 0, // get emissions from emissions scraper
      tempChange: row.Value,
    }).catch((error) => {
      console.log(error);
    });
  }
}

export const populateLandData = async () => {
  // get landArea from country scraper
  // get waterWithdrawal from water scraper
}

export const populateSocietalData = async () => {
  const societalDataPath = path.resolve('public/hdi-gni-data.csv');
  const data = await csv().fromFile(societalDataPath);

  for (const row of data) {
    axios.post(`http://localhost:3002/societalData/${row.Country}/2021`, {
      hdi: data.HDI,
      gni: data.GNI
    });
  }
}

export const populateEnergyData = async () => {
  const energyDataPath = path.resolve('public/energy-consumption-data.csv');
  const data = await csv().fromFile(energyDataPath);

  for (const row of data) {
    axios.post(`http://localhost:3002/energyData/${row.Area}/${row.Year}`, {
      naturalGas: row.NaturalGas,
      fuelOil: row.FuelOil,
      coal: row.Coal
    }).catch((error) => {
      console.log(error);
    });
  }
}

export const populateDisasterData = async () => {
  const disasterDataPath = path.resolve('public/natural-disasters.csv');
  const data = await csv().fromFile(disasterDataPath);

  for (const row of data) {
    axios.post(`http://localhost:3002/disasterData/${row.Country}/${row.Year}`, {
      deaths: row.Deaths,
      homelessness: row.Homelessness,
      economicDamages: row.Economic
    }).catch((error) => {
      console.log(error);
    });
  }
}

export const populateDiseaseData = async () => {
  const diseaseDataPath = path.resolve('public/disease-data.csv');
  const data = await csv().fromFile(diseaseDataPath);

  for (const row of data) {
    axios.post(`http://localhost:3002/diseaseData/${row.Country}/${row.Year}`, {
      rabies: row.Rabies,
      malaria: row.Malaria,
      infection: row.Infection
    }).catch((error) => {
      console.log(error);
    });
  }
}

export const populateFoodData = async () => {
  const foodDataPath = path.resolve('public/food-data.csv');
  const data = await csv().fromFile(foodDataPath);

  for (const row of data) {
    axios.post(`http://localhost:3002/foodData/${row.Area}/${row.Year}`, {
      rice: row.Rice,
      corn: row.Corn,
      wheat: row.Wheat
    }).catch((error) => {
      console.log(error);
    });
  }
}
