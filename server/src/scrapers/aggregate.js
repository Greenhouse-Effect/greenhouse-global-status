import axios from 'axios';

import { countryScraper } from "./countryScraper.js";

export const aggregateCountryData = async () => {
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
