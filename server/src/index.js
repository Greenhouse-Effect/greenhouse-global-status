import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import countryRoute from './routes/countryRoute.js';
import atmosphericData from './routes/atmosphericDataRoute.js';
import landData from './routes/landDataRoute.js';
import economicData from './routes/economicDataRoute.js';
import politicalData from './routes/politicalDataRoute.js';
import oceanRoute from './routes/oceanRoute.js';
import oceanDataRoute from './routes/oceanDataRoute.js'

export const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/country", countryRoute);
app.use("/atmosphericData", atmosphericData);
app.use("/landData", landData);
app.use("/economicData", economicData);
app.use("/politicalData", politicalData);
app.use("/ocean", oceanRoute);
app.use("/oceanData", oceanDataRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke in the Server!')
});

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
