import { db } from '../database.js'

export const insertCountry = async (name, population, populationChange) => {
  await db.query(`
  INSERT INTO COUNTRY (countryName, countryPopulation, countryPopulationChange) 
  VALUES (?, ?, ?)
  `, [name, population, populationChange]);
  return getCountryName(name);
}

export const getCountryName = async (name) => {
  const [rows] = await db.query(`
  SELECT *
  FROM COUNTRY
  WHERE countryName = ?
  `, [name]);
  return rows[0];
}

export const getCountries = async () => {
  const [rows] = await db.query("SELECT * FROM COUNTRY");
  return rows;
}

export const getCountryPopulationL = async (population) => {
  const [rows] = await db.query(`
  SELECT *
  FROM COUNTRY
  WHERE countryPopulation < ?
  `, [population]);
  return rows;
}

export const getCountryPopulationG = async (population) => {
  const [rows] = await db.query(`
  SELECT *
  FROM COUNTRY
  WHERE countryPopulation > ?
  `, [population]);
  return rows;
}

export const getCountryPopulationChangeL = async (populationChange) => {
  const [rows] = await db.query(`
  SELECT *
  FROM COUNTRY
  WHERE countryPopulationChange < ?
  `, [populationChange]);
  return rows;
}

export const getCountryPopulationChangeG = async (populationChange) => {
  const [rows] = await db.query(`
  SELECT *
  FROM COUNTRY
  WHERE countryPopulationChange > ?
  `, [populationChange]);
  return rows;
}
