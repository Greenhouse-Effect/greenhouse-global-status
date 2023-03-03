import * as dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}).promise();

await db.query("DROP TABLE IF EXISTS COUNTRY, OCEAN, ATMOSPHERICDATA, LANDDATA, OCEANDATA, SOCIETALDATA, ENERGYDATA");

await db.query(`
CREATE TABLE COUNTRY 
(countryName VARCHAR(255) PRIMARY KEY, population INT, populationYearlyChange INT)
`);

// TODO: Create OCEAN table and define attributes, domains, and constraints
await db.query(`
CREATE TABLE OCEAN
(oceanName VARCHAR(255) PRIMARY KEY)
`);

// TODO: Create ATMOSPHERICDATA table and define attributes, domains, and constraints
await db.query(`
CREATE TABLE ATMOSPHERICDATA
(countryName VARCHAR(255) NOT NULL, year INT NOT NULL, emissions INT, tempChange INT, unit INT, PRIMARY KEY (countryName, year))
`);

// TODO: Create LANDDATA table and define attributes, domains, and constraints
await db.query(`
CREATE TABLE LANDDATA
(countryName VARCHAR(255) NOT NULL, year INT NOT NULL, landArea INT, waterWithdrawal INT, PRIMARY KEY (countryName, year))
`);

// TODO: Create SOCIETALDATA table and define attributes, domains, and constraints
await db.query(`
CREATE TABLE SOCIETALDATA
(countryName VARCHAR(255) NOT NULL, year INT NOT NULL, hdi INT, gni INT, PRIMARY KEY (countryName, year))
`);

// TODO: Create ENERGYDATA table and define attributes, domains, and constraints
await db.query(`
CREATE TABLE ENERGYDATA
(countryName VARCHAR(255) NOT NULL, year INT NOT NULL, naturalGasEmissions INT, fuelOilEmissions INT, coalEmissions INT, PRIMARY KEY (countryName, year))
`);

// TODO: Create OCEANDATA table and define attributes, domains, and constraints
await db.query(`
CREATE TABLE OCEANDATA
(oceanName VARCHAR(255) NOT NULL, year INT NOT NULL, sinkLevel INT, tempHigh INT, tempLow INT, seaLevel INT, PRIMARY KEY (oceanName, year))
`);
