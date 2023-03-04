import { db } from '../database.js'

export const insertCountry = async (name, population, populationYearlyChange) => {
  await db.query(`
  INSERT INTO COUNTRY (countryName, population, populationYearlyChange) 
  VALUES (?, ?, ?)
  `, [name, population, populationYearlyChange]);
  return getCountryName(name);
}

export const getCountries = async () => {
  const [rows] = await db.query("SELECT * FROM COUNTRY");
  return rows;
}

export const getCountryName = async (name) => {
  const [rows] = await db.query(`
  SELECT *
  FROM COUNTRY
  WHERE countryName = ?
  `, [name]);
  return rows[0];
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

export const getpopulationYearlyChangeL = async (populationYearlyChange) => {
  const [rows] = await db.query(`
  SELECT *
  FROM COUNTRY
  WHERE populationYearlyChange < ?
  `, [populationYearlyChange]);
  return rows;
}

export const getpopulationYearlyChangeG = async (populationYearlyChange) => {
  const [rows] = await db.query(`
  SELECT *
  FROM COUNTRY
  WHERE populationYearlyChange > ?
  `, [populationYearlyChange]);
  return rows;
}
