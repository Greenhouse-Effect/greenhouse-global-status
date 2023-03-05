import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import countryRoute from './routes/countryRoute.js';
import atmosphericData from './routes/atmosphericDataRoute.js';
import landData from './routes/landDataRoute.js';
import societalData from './routes/societalDataRoute.js';
import energyData from './routes/energyDataRoute.js';
import foodData from './routes/foodDataRoute.js';
import diseaseData from './routes/diseaseDataRoute.js';
import disasterData from './routes/disasterDataRoute.js';
import { populateCountryData,
  populateAtmosphericData, 
  populateLandData,
  populateSocietalData,
  populateEnergyData,
  populateFoodData, 
  populateDiseaseData, 
  populateDisasterData } from './population/populateDatabase.js';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/country", countryRoute);
app.use("/atmosphericData", atmosphericData);
app.use("/landData", landData);
app.use("/societalData", societalData);
app.use("/energyData", energyData);
app.use("/foodData", foodData);
app.use("/diseaseData", diseaseData);
app.use("/disasterData", disasterData);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke in the Server!')
});

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`running on port ${port}`);
});

await populateCountryData();
await populateAtmosphericData();
// await populateLandData();
// societal
// energy
await populateFoodData();
await populateDiseaseData();
await populateDisasterData();
