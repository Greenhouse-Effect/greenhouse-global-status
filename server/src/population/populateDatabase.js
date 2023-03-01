import axios from 'axios';
import csv from 'csvtojson';

import { countryScraper } from "./scrapers/countryScraper.js";

export const populateCountryData = async () => {
  const countryData = await countryScraper();
  
  for (const row of countryData) {
    axios.post("http://localhost:3002/country", {
      name: row[0],
      population: row[1],
      populationChange: row[2]
    }).catch((error) => {
      console.log(error);
    });
  }
}

export const populateAtmosphericData = async () => {
  const temperatureData = await csv().fromFile("../../public/temperature_data.csv");

  for (const row of temperatureData) {
    row.Value = Number(row.Value);
    row.Year = Number(row.Year);

    axios.post(`http://localhost:3002/atmosphericData/${row.Area}/${row.Year}`, {
      emissionLevel: 0,
      tempHigh: row.Value,
      tempUnit: "C"
    })
  }
}

export const populateLandData = async () => {
  
}

export const populateEnergyData = async () => {
  const coalData = await csv().fromFile("../../public/coal_emissions.csv");
  const fuelOilData = await csv().fromFile("../../public/fuel_oil_emissions.csv");
  const naturalGasData = await csv().fromFile("../../public/natural_gas_emissions.csv");

  for (let i = 0; i < 1000; i++) {
    coalData[i].Year = Number(coalData[i].Year);
    coalData[i].Value = Number(coalData[i].Value);
    fuelOilData[i].Value = Number(fuelOilData[i].Value);
    naturalGasData[i].Value = Number(naturalGasData[i].Value);

    axios.post(`http://localhost:3002/energyData/${coalData[i].Area}/${coalData[i].Year}`, {
      emissionUnit: "Kilotonne",
      coalEmissions: coalData.Value,
      fuelOilEmissions: fuelOilData.Value,
      naturalGasEmission: naturalGasData.Value
    })
  }
}

export const populateSocietalData = async () => {
  const data = await csv().fromFile("../../public/hdi_ndi.csv");

  for (const row of data) {
    row.HDI = Number(row.HDI);
    row.GNI = Number(row.GNI.replaceAll(',',''));
    
    axios.post(`http://localhost:3002/societalData/${row.Country}/2021`, {
      hdi: data.HDI,
      gni: data.GNI
    })
  }
}
