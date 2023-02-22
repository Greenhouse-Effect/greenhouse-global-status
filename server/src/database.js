import * as dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
}).promise();


await db.query("DROP TABLE IF EXISTS COUNTRY, OCEAN, ATMOSPHEREICDATA, LANDDATA, ECONOMICDATA, POLITICALDATA, OCEANDATA");

// TODO: Create COUNTRY table and define attributes, domains, and constraints
await db.query(`
CREATE TABLE COUNTRY 
(countryName VARCHAR(255) PRIMARY KEY, countryPopulation INT)
`);

// TODO: Create OCEAN table and define attributes, domains, and constraints
// await db.query(`

// `);

// TODO: Create ATMOSPHERICDATA table and define attributes, domains, and constraints
// await db.query(`

// `);

// TODO: Create LANDDATA table and define attributes, domains, and constraints
// await db.query(`

// `);

// TODO: Create ECONOMICDATA table and define attributes, domains, and constraints
// await db.query(`

// `);

// TODO: Create POLITICALDATA table and define attributes, domains, and constraints
// await db.query(`

// `);

// TODO: Create OCEANDATA table and define attributes, domains, and constraints
// await db.query(`

// `);
