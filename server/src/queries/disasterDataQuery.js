import { db } from '../database.js';

export const insertDisasterData = async (name, year, deaths, homelessness, economicDamages) => {
  await db.query(`
  INSERT INTO DISASTERDATA (countryName, year, deaths, homelessness, economicDamages)
  VALUES (?, ?, ?, ?, ?)
  `, [name, year, deaths, homelessness, economicDamages]);
  return (getDisasterData(name, year));
}

export const getAllData = async (req, res) => {
  const [rows] = await db.query(`SELECT * FROM DISASTERDATA`);
  return rows;
}

export const getDisasterData = async (name, year) => {
  const [rows] = await db.query(`
  SELECT *
  FROM DISASTERDATA
  WHERE countryName = ? AND year = ?
  `, [name, year]);
  return rows[0];
}

export const getDisasterDataDeathsG = async (year, deaths) => {
  const [rows] = await db.query(`
  SELECT countryName, year, deaths
  FROM DISASTERDATA
  WHERE year = ? AND deaths > ?
  `, [year, deaths]);
  return rows;
}

export const getDisasterDataDeathsL = async (year, deaths) => {
  const [rows] = await db.query(`
  SELECT countryName, year, deaths
  FROM DISASTERDATA
  WHERE year = ? AND deaths < ?
  `, [year, deaths]);
  return rows;
}

export const getDisasterDataHomelessnessG = async (year, homelessness) => {
  const [rows] = await db.query(`
  SELECT countryName, year, homelessness
  FROM DISASTERDATA
  WHERE year = ? AND homelessness > ?
  `, [year, homelessness]);
  return rows;
}

export const getDisasterDataHomelessnessL = async (year, homelessness) => {
  const [rows] = await db.query(`
  SELECT countryName, year, homelessness
  FROM DISASTERDATA
  WHERE year = ? AND homelessness < ?
  `, [year, homelessness]);
  return rows;
}

export const getDisasterDataEconomicDamagesG = async (year, economicDamages) => {
  const [rows] = await db.query(`
  SELECT countryName, year, economicDamages
  FROM DISASTERDATA
  WHERE year = ? AND economicDamages > ?
  `, [year, economicDamages]);
  return rows;
}

export const getDisasterDataEconomicDamagesL = async (year, economicDamages) => {
  const [rows] = await db.query(`
  SELECT countryName, year, economicDamages
  FROM DISASTERDATA
  WHERE year = ? AND economicDamages < ?
  `, [year, economicDamages]);
  return rows;
}
