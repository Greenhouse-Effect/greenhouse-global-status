import * as dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

import { populateCountryData, 
populateAtmosphericData, 
populateLandData, 
populateSocietalData, 
populateEnergyData, 
populateDisasterData, 
populateDiseaseData, 
populateFoodData } from './population/populateDatabase.js';

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}).promise();

await db.query("DROP TABLE IF EXISTS COUNTRY, ATMOSPHERICDATA, LANDDATA, SOCIETALDATA, ENERGYDATA, DISASTERDATA");

// creating country entity in database
await db.query(`
CREATE TABLE COUNTRY 
(countryName VARCHAR(255) PRIMARY KEY, population INT, populationYearlyChange DECIMAL(3,2))
`);

// creating atmospheric data entity in database
await db.query(`
CREATE TABLE ATMOSPHERICDATA
(countryName VARCHAR(255) NOT NULL, year INT NOT NULL, emissions INT, tempChange DECIMAL(4, 3), tempUnit VARCHAR(1), PRIMARY KEY (countryName, year))
`);

// creating land data entity in database
await db.query(`
CREATE TABLE LANDDATA
(countryName VARCHAR(255) NOT NULL, year INT NOT NULL, landArea INT, waterWithdrawal INT, PRIMARY KEY (countryName, year))
`);

// creating societal data entity in database
await db.query(`
CREATE TABLE SOCIETALDATA
(countryName VARCHAR(255) NOT NULL, year INT NOT NULL, hdi INT, gni INT, PRIMARY KEY (countryName, year))
`);

// creating energy data entity in database
await db.query(`
CREATE TABLE ENERGYDATA
(countryName VARCHAR(255) NOT NULL, year INT NOT NULL, naturalGasEmissions INT, fuelOilEmissions INT, coalEmissions INT, PRIMARY KEY (countryName, year))
`);

await db.query(`
CREATE TABLE DISASTERDATA
(countryName VARCHAR(255) NOT NULL, year INT NOT NULL, deaths INT, homelessness INT, economicDamages INT, PRIMARY KEY (countryName, year))
`)
