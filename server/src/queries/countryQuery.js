import { db } from '../database.js'

export const getCountries = async () => {
  const [rows] = await db.query("SELECT * FROM COUNTRY");
  return rows;
}

export const getCountry = async (name) => {
  const [rows] = await db.query(`
  SELECT *
  FROM COUNTRY
  WHERE countryName = ?
  `, [name]);
  return rows[0]
}

export const insertCountry = async (name, population, populationChange) => {
  await db.query(`
  INSERT INTO COUNTRY (countryName, countryPopulation, countryPopulationChange) 
  VALUES (?, ?, ?)
  `, [ name, population, populationChange ]);
  return getCountry(name);
}
