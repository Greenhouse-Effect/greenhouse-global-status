import { db } from '../database.js'

export const insertOcean = async (name) => {
  await db.query(`
  INSERT INTO OCEAN (oceanName) 
  VALUES (?)
  `, [name]);
  return getOcean(name);
}

export const getOceans = async () => {
  const [rows] = await db.query("SELECT * FROM OCEAN");
  return rows;
}

export const getOcean = async (name) => {
  const [rows] = await db.query(`
  SELECT *
  FROM OCEAN
  WHERE oceanName = ?
  `, [name]);
  return rows[0]
}
