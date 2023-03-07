import * as dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}).promise();

// uncomment this for deployment
// await db.query(`DROP TABLE IF EXISTS COUNTRY, ATMOSPHERICDATA, LANDDATA, SOCIETALDATA, ENERGYDATA, FOODDATA, DISEASEDATA, DISASTERDATA`)

// // creating country entity in database
// await db.query(`
// CREATE TABLE COUNTRY 
//   (countryName VARCHAR(255) PRIMARY KEY, 
//   population INT, 
//   populationYearlyChange DECIMAL(3,2))
// `);

// // creating atmospheric data entity in database
// await db.query(`
// CREATE TABLE ATMOSPHERICDATA
//   (countryName VARCHAR(255) NOT NULL, 
//   year INT NOT NULL, 
//   emissions INT, 
//   emissionsUnit VARCHAR(255),
//   tempChange DECIMAL(4, 3), 
//   tempUnit VARCHAR(1), 
//   FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
// `);

// // creating land data entity in database
// await db.query(`
// CREATE TABLE LANDDATA
//   (countryName VARCHAR(255) NOT NULL, 
//   year INT NOT NULL, 
//   landArea INT, 
//   waterWithdrawal INT, 
//   FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
// `);

// // creating societal data entity in database
// await db.query(`
// CREATE TABLE SOCIETALDATA
//   (countryName VARCHAR(255) NOT NULL, 
//   year INT NOT NULL, 
//   hdi DECIMAL(4,3), 
//   gni INT, 
//   FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
// `);

// // creating energy data entity in database
// await db.query(`
// CREATE TABLE ENERGYDATA
//   (countryName VARCHAR(255) NOT NULL, 
//   year INT NOT NULL, 
//   naturalGasEmissions DECIMAL(8,3), 
//   fuelOilEmissions DECIMAL(8,3), 
//   coalEmissions DECIMAL(8,3), 
//   FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
// `);

// // creating food data entity in database
// await db.query(`
// CREATE TABLE FOODDATA
//   (countryName VARCHAR(255) NOT NULL, 
//   year INT NOT NULL, 
//   riceProduction INT, 
//   cornProduction INT, 
//   wheatProduction INT, 
//   FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
// `);

// // creating disease data entity in databsase
// await db.query(`
// CREATE TABLE DISEASEDATA
//   (countryName VARCHAR(255) NOT NULL, 
//   year INT NOT NULL, 
//   rabiesIncidence INT, 
//   malariaIncidence INT, 
//   countryInfection DECIMAL(4,2), 
//   FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
// `);

// // creating disease data entity in databsase
// await db.query(`
// CREATE TABLE DISASTERDATA
//   (countryName VARCHAR(255) NOT NULL, 
//   year INT NOT NULL, 
//   deaths INT, 
//   homelessness INT, 
//   economicDamages INT, 
//   FOREIGN KEY (countryName) REFERENCES COUNTRY(countryName))
// `);
