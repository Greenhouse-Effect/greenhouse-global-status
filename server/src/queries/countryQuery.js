import { db } from '../database.js'

export const insertCountry = async (name, population, populationChange) => {
  await db.query(`
  INSERT INTO COUNTRY (countryName, population, populationChange) 
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

export const getPopulationL = async (population) => {
  const [rows] = await db.query(`
  SELECT *
  FROM COUNTRY
  WHERE population < ?
  `, [population]);
  return rows;
}

export const getPopulationG = async (population) => {
  const [rows] = await db.query(`
  SELECT *
  FROM COUNTRY
  WHERE population > ?
  `, [population]);
  return rows;
}

export const getPopulationChangeL = async (populationChange) => {
  const [rows] = await db.query(`
  SELECT *
  FROM COUNTRY
  WHERE populationChange < ?
  `, [populationChange]);
  return rows;
}

export const getPopulationChangeG = async (populationChange) => {
  const [rows] = await db.query(`
  SELECT *
  FROM COUNTRY
  WHERE populationChange > ?
  `, [populationChange]);
  return rows;
}
