import { db } from '../database.js'

export const insertSocietalData = async (name, year, hdi, gni) => {
  await db.query(`
  INSERT INTO SOCIETALDATA (countryName, year, hdi, gni) 
  VALUES (?, ?, ?, ?)
  `, [name, year, hdi, gni]);
  return getSocietalData(name, year);
}

export const getSocietalData = async (name, year) => {
  const [rows] = await db.query(`
  SELECT *
  FROM SOCIETALDATA
  WHERE countryName = ? AND year = ?
  `, [name, year]);
  return rows[0]
}

export const getSocietalHdiG = async (year, hdi) => {
  const [rows] = await db.query(`
  SELECT countryName, year, hdi
  FROM ENERGYDATA
  WHERE year = ? AND hdi > ?
  `, [year, hdi]);
  return rows;
}

export const getSocietalHdiL = async (year, hdi) => {
  const [rows] = await db.query(`
  SELECT countryName, year, hdi
  FROM ENERGYDATA
  WHERE year = ? AND hdi < ?
  `, [year, hdi]);
  return rows;
}

export const getSocietalGniG = async (year, gni) => {
  const [rows] = await db.query(`
  SELECT countryName, year, gni
  FROM ENERGYDATA
  WHERE year = ? AND gni > ?
  `, [year, gni]);
  return rows;
}

export const getSocietalGniL = async (year, gni) => {
  const [rows] = await db.query(`
  SELECT countryName, year, gni
  FROM ENERGYDATA
  WHERE year = ? AND gni < ?
  `, [year, gni]);
  return rows;
}