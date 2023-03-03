import { db } from '../database.js'

export const insertAtmosphericData = async (name, year, emissions, tempChange, unit) => {
  await db.query(`
  INSERT INTO ATMOSPHERICDATA (countryName, year, emissions, tempChange, unit) 
  VALUES (?, ?, ?, ?, ?)
  `, [name, year, emissions, tempChange, unit]);
  return getAtmosphericData(name, year);
}

export const getAtmosphericData = async (name, year) => {
  const [rows] = await db.query(`
  SELECT *
  FROM ATMOSPHERICDATA
  WHERE countryName = ? AND year = ?
  `, [name, year]);
  return rows[0]
}

export const getAtmosphericEmissionsG = async (year, emissions) => {
    const [rows] = await db.query(`
    SELECT countryName, emissions, year
    FROM ATMOSPHERICDATA
    WHERE year = ? AND emissions > ?
    `, [year, emissions]);
    return rows;
}

export const getAtmosphericEmissionsL = async (year, emissions) => {
    const [rows] = await db.query(`
    SELECT countryName, emissions, year
    FROM ATMOSPHERICDATA
    WHERE year = ? AND emissions < ?
    `, [year, emissions]);
    return rows;
}

export const getAtmosphericTempChangeG = async (year, tempChange) => {
    const [rows] = await db.query(`
    SELECT countryName, tempChange, year
    FROM ATMOSPHERICDATA
    WHERE year = ? AND tempChange > ?
    `, [year, tempChange]);
    return rows;
}

export const getAtmosphericTempChangeL = async (year, tempChange) => {
  const [rows] = await db.query(`
  SELECT countryName, tempChange, year
  FROM ATMOSPHERICDATA
  WHERE year = ? AND tempChange < ?
  `, [year, tempChange]);
  return rows;
}