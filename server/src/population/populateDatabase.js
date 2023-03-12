import axios from 'axios';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const filename = fileURLToPath(import.meta.url);
const dirName = path.dirname(filename);

export const populateCountryData = async () => {
  const data = JSON.parse(
    fs.readFileSync(path.resolve(dirName, './dataFiles/country-data.json'))
  );

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios
        .post(
          `http://${process.env.APP_IP}:${process.env.APP_PORT}/country`,
          {
            name: row.countryName,
            population: row.population,
            populationYearlyChange: row.populationYearlyChange,
          },
          {
            headers: {
              'content-type': 'application/json',
            },
          }
        )
        .catch((error) => {
          console.log(error);
        })
    );
  }

  await Promise.all(promises).then(console.log('COUNTRY has been populated'));
};

export const populateAtmosphericData = async () => {
  const data = JSON.parse(
    fs.readFileSync(
      path.resolve(dirName, './dataFiles/emissions-temp-data.json')
    )
  );

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios
        .post(
          `http://${process.env.APP_IP}:${process.env.APP_PORT}/atmosphericData/${row.Area}/${row.Year}`,
          {
            emissions: row.Emission,
            tempChange: row.TempChange,
          },
          {
            headers: {
              'content-type': 'application/json',
            },
          }
        )
        .catch((error) => {
          console.log(error);
        })
    );
  }

  await Promise.all(promises).then(
    console.log('ATMOSPHERICDATA has been populated')
  );
};

export const populateLandData = async () => {
  const data = JSON.parse(
    fs.readFileSync(path.resolve(dirName, './dataFiles/land-water-data.json'))
  );

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios
        .post(
          `http://${process.env.APP_IP}:${process.env.APP_PORT}/landData/${row.Country}/2021`,
          {
            landArea: row.Land,
            waterWithdrawal: row.Water,
          },
          {
            headers: {
              'content-type': 'application/json',
            },
          }
        )
        .catch((error) => {
          console.log(error);
        })
    );
  }

  await Promise.all(promises).then(console.log('LANDDATA has been populated'));
};

export const populateSocietalData = async () => {
  const data = JSON.parse(
    fs.readFileSync(path.resolve(dirName, './dataFiles/hdi-gni-data.json'))
  );

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios
        .post(
          `http://${process.env.APP_IP}:${process.env.APP_PORT}/societalData/${row.Country}/2021`,
          {
            hdi: row.HDI,
            gni: row.GNI,
          },
          {
            headers: {
              'content-type': 'application/json',
            },
          }
        )
        .catch((error) => {
          console.log(error);
        })
    );
  }

  await Promise.all(promises).then(
    console.log('SOCIETALDATA has been populated')
  );
};

export const populateEnergyData = async () => {
  const data = JSON.parse(
    fs.readFileSync(
      path.resolve(dirName, './dataFiles/energy-consumption-data.json')
    )
  );

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios
        .post(
          `http://${process.env.APP_IP}:${process.env.APP_PORT}/energyData/${row.Area}/${row.Year}`,
          {
            naturalGas: row.NaturalGas,
            fuelOil: row.FuelOil,
            coal: row.Coal,
          },
          {
            headers: {
              'content-type': 'application/json',
            },
          }
        )
        .catch((error) => {
          console.log(error);
        })
    );
  }

  await Promise.all(promises).then(
    console.log('ENERGYDATA has been populated')
  );
};

export const populateDisasterData = async () => {
  const data = JSON.parse(
    fs.readFileSync(path.resolve(dirName, './dataFiles/disaster-data.json'))
  );

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios
        .post(
          `http://${process.env.APP_IP}:${process.env.APP_PORT}/disasterData/${row.Country}/${row.Year}`,
          {
            deaths: row.Deaths,
            homelessness: row.Homelessness,
            economicDamages: row.Economic,
          },
          {
            headers: {
              'content-type': 'application/json',
            },
          }
        )
        .catch((error) => {
          console.log(error);
        })
    );
  }

  await Promise.all(promises).then(
    console.log('DISASTERDATA has been populated')
  );
};

export const populateDiseaseData = async () => {
  const data = JSON.parse(
    fs.readFileSync(path.resolve(dirName, './dataFiles/disease-data.json'))
  );

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios
        .post(
          `http://${process.env.APP_IP}:${process.env.APP_PORT}/diseaseData/${row.Country}/${row.Year}`,
          {
            rabies: row.Rabies,
            malaria: row.Malaria,
            infection: row.Share,
          },
          {
            headers: {
              'content-type': 'application/json',
            },
          }
        )
        .catch((error) => {
          console.log(error);
        })
    );
  }

  await Promise.all(promises).then(
    console.log('DISEASEDATA has been populated')
  );
};

export const populateFoodData = async () => {
  const data = JSON.parse(
    fs.readFileSync(path.resolve(dirName, './dataFiles/food-data.json'))
  );

  let promises = [];
  for (const row of data) {
    promises.push(
      await axios
        .post(
          `http://${process.env.APP_IP}:${process.env.APP_PORT}/foodData/${row.Area}/${row.Year}`,
          {
            rice: row.Rice,
            corn: row.Corn,
            wheat: row.Wheat,
          },
          {
            headers: {
              'content-type': 'application/json',
            },
          }
        )
        .catch((error) => {
          console.log(error);
        })
    );
  }

  await Promise.all(promises).then(console.log('FOODDATA has been populated'));
};
