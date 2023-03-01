import axios from 'axios';

import { countryScraper } from "./countryScraper.js";

export const populateCountryData = async () => {
  const countryData = await countryScraper();
  
  for (const col of countryData) {
    axios.post("http://localhost:3002/country", {
      name: col[0],
      population: col[1],
      populationChange: col[2]
    }).catch((error) => {
      console.log(error);
    });
  }
}
