import * as dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql';

import server from './server.js';

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }

  db.query("DROP TABLE IF EXISTS CONTINENT, COUNTRY, OCEAN, REPORT, ATMOSPHERE, LAND, ECONOMIC, POLITICAL", (err, result) => {
    if (err) throw err;
  });

  // TODO: Create COUNTRY table and define attributes, domains, and constraints (do not implement foreign keys yet)
  const sqlCreateCountry = "CREATE TABLE COUNTRY (countryName VARCHAR(255) PRIMARY KEY, countryPopulation INT)";
  db.query(sqlCreateCountry, (err, result) => {
    if (err) throw err;
    console.log("Country table created ");
  })

  // TODO: Create CONTINENT table and define attributes, domains, and constraints (do not implement foreign keys yet)

  // TODO: Create OCEAN table and define attributes, domains, and constraints (do not implement foreign keys yet)

  // TODO: Create REPORT table and define attributes, domains, and constraints (do not implement foreign keys yet)

  // TODO: Create ATMOSPHERE table and define attributes, domains, and constraints (do not implement foreign keys yet)

  // TODO: Create LAND table and define attributes, domains, and constraints (do not implement foreign keys yet)

  // TODO: Create ECONOMIC table and define attributes, domains, and constraints (do not implement foreign keys yet)

  // TODO: Create POLITICAL table and define attributes, domains, and constraints (do not implement foreign keys yet)

  console.log('Database connected');
});

const port = process.env.APP_PORT;
server.listen(port, () => {
  console.log(`running on port ${port}`);
});
