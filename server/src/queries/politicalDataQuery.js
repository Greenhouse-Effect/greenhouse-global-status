import { db } from '../database.js'


export const getPoliticalData = async (name, year) => {
  const [rows] = await db.query(`
  SELECT *
  FROM POLITICALDATA
  WHERE countryName = ? AND year = ?
  `, [name, year]);
  return rows[0]
}

export const insertPoliticalData = async (name, year, sdg, hdi) => {
  await db.query(`
  INSERT INTO POLITICALDATA (countryName, year, sdg, hdi) 
  VALUES (?, ?, ?, ?)
  `, [name, year, sdg, hdi]);
  return getPoliticalData(name, year);
}

export const getPoliticalSDG = async (year, sdg) => {
    const [rows] = await db.query(`
    SELECT countryName, sdg
    FROM POLITICALDATA
    WHERE year = ? AND sdg >= ?
    `, [year, sdg]);
    return rows;
}

export const getPoliticalHDI = async (year, hdi) => {
    const [rows] = await db.query(`
    SELECT countryName, hdi
    FROM POLITICALDATA
    WHERE year = ? AND hdi >= ?
    `, [year, hdi]);
    return rows;
}