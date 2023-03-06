import * as dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}).promise();

// creating country entity in database
await db.query(`
CREATE TABLE IF NOT EXISTS COUNTRY 
  (countryName VARCHAR(255) PRIMARY KEY, 
  population INT, 
  populationYearlyChange DECIMAL(3,2))
`);

// creating atmospheric data entity in database
await db.query(`
CREATE TABLE IF NOT EXISTS ATMOSPHERICDATA
  (countryName VARCHAR(255) NOT NULL, 
  year INT NOT NULL, 
  emissions INT, 
  emissionsUnit VARCHAR(255),
  tempChange DECIMAL(4, 3), 
  tempUnit VARCHAR(1), 
  FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
`);

// creating land data entity in database
await db.query(`
CREATE TABLE IF NOT EXISTS LANDDATA
  (countryName VARCHAR(255) NOT NULL, 
  year INT NOT NULL, 
  landArea INT, 
  waterWithdrawal INT, 
  FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
`);

// creating societal data entity in database
await db.query(`
CREATE TABLE IF NOT EXISTS SOCIETALDATA
  (countryName VARCHAR(255) NOT NULL, 
  year INT NOT NULL, 
  hdi DECIMAL(4,3), 
  gni INT, 
  FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
`);

// creating energy data entity in database
await db.query(`
CREATE TABLE IF NOT EXISTS ENERGYDATA
  (countryName VARCHAR(255) NOT NULL, 
  year INT NOT NULL, 
  naturalGasEmissions DECIMAL(8,3), 
  fuelOilEmissions DECIMAL(8,3), 
  coalEmissions DECIMAL(8,3), 
  FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
`);

// creating food data entity in database
await db.query(`
CREATE TABLE IF NOT EXISTS FOODDATA
  (countryName VARCHAR(255) NOT NULL, 
  year INT NOT NULL, 
  riceProduction INT, 
  cornProduction INT, 
  wheatProduction INT, 
  FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
`);

// creating disease data entity in databsase
await db.query(`
CREATE TABLE IF NOT EXISTS DISEASEDATA
  (countryName VARCHAR(255) NOT NULL, 
  year INT NOT NULL, 
  rabiesIncidence INT, 
  malariaIncidence INT, 
  countryInfection DECIMAL(4,2), 
  FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
`);

// creating disease data entity in databsase
await db.query(`
CREATE TABLE IF NOT EXISTS DISASTERDATA
  (countryName VARCHAR(255) NOT NULL, 
  year INT NOT NULL, 
  deaths INT, 
  homelessness INT, 
  economicDamages INT, 
  FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
`);
