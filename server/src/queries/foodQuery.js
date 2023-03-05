import { db } from "../database.js";

export const insertFoodData = async (name, year, rice, corn, wheat) => {
  await db.query(`
  INSERT INTO FOODDATA (countryName, year, riceProduction, cornProduction, wheatProduction)
  VALUES (?, ?, ?, ?, ?)
  `, [name, year, rice, corn, wheat]);
  return getFoodData(name, year);
}

export const getAllData = async (req, res) => {
  const [rows] = await db.query(`SELECT * FROM FOODDATA`);
  return rows;
}

export const getFoodData = async (name, year) => {
  const [rows] = await db.query(`
  SELECT *
  FROM FOODDATA
  WHERE countryName = ? AND year = ?
  `, [name, year]);
  return rows[0];
}

export const getFoodDataRiceG = async (year, rice) => {
  const [rows] = await db.query(`
  SELECT countryName, year, riceProduction
  FROM FOODDATA
  WHERE year = ? AND riceProduction > ?
  `, [year, rice]);
  return rows;
}

export const getFoodDataRiceL = async (year, rice) => {
  const [rows] = await db.query(`
  SELECT countryName, year, riceProduction
  FROM FOODDATA
  WHERE year = ? AND riceProduction < ?
  `, [year, rice]);
  return rows;
}

export const getFoodDataCornG = async (year, corn) => {
  const [rows] = await db.query(`
  SELECT countryName, year, cornProduction
  FROM FOODDATA
  WHERE year = ? AND cornProduction > ?
  `, [year, corn]);
  return rows;
}

export const getFoodDataCornL = async (year, corn) => {
  const [rows] = await db.query(`
  SELECT countryName, year, cornProduction
  FROM FOODDATA
  WHERE year = ? AND cornProduction < ?
  `, [year, corn]);
  return rows;
}

export const getFoodDataWheatG = async (year, wheat) => {
  const [rows] = await db.query(`
  SELECT countryName, year, wheatProduction
  FROM FOODDATA
  WHERE year = ? AND wheatProduction > ?
  `, [year, wheat]);
  return rows;
}

export const getFoodDataWheatL = async (year, wheat) => {
  const [rows] = await db.query(`
  SELECT countryName, year, wheatProduction
  FROM FOODDATA
  WHERE year = ? AND wheatProduction < ?
  `, [year, wheat]);
  return rows;
}
