import { db } from '../database.js'


export const getAtmosphericData = async (name, year) => {
  const [rows] = await db.query(`
  SELECT *
  FROM ATMOSPHERICDATA
  WHERE countryName = ? AND year = ?
  `, [name, year]);
  return rows[0]
}

export const insertAtmosphericData = async (name, year, emissionLevel, tempHigh, tempLow) => {
  await db.query(`
  INSERT INTO ATMOSPHERICDATA (countryName, year, emissionsLevel, tempHigh, tempLow) 
  VALUES (?, ?, ?, ?, ?)
  `, [name, year, emissionLevel, tempHigh, tempLow]);
  return getAtmosphericData(name, year);
}

export const getAtmosphericTempHigh = async (year, tempHigh) => {
  const [rows] = await db.query(`
  SELECT countryName, tempHigh
  FROM ATMOSPHERICDATA
  WHERE year = ? AND tempHigh >= ?
  `, [year, tempHigh]);
  return rows;
}

export const getAtmosphericTempLow = async (year, tempLow) => {
  const [rows] = await db.query(`
  SELECT countryName, tempLow
  FROM ATMOSPHERICDATA
  WHERE year = ? AND tempLow <= ?
  `, [year, tempLow]);
  return rows;
}

export const getAtmosphericEmissionLevel = async (year, emissionsLevel) => {
  const [rows] = await db.query(`
  SELECT countryName, emissionsLevel
  FROM ATMOSPHERICDATA
  WHERE year = ? AND emissionsLevel >= ?
  `, [year, emissionsLevel]);
  return rows;
}