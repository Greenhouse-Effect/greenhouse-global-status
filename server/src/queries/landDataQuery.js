import { db } from '../database.js'

// gets the entire table
export const insertLandData = async (name, year, landArea, waterWithdrawal) => {
  await db.query(`
  INSERT INTO LANDDATA (countryName, year, landArea, waterWithdrawal)
  VALUES (?, ?, ?, ?)
  `, [name, year, landArea, waterWithdrawal]);
  return getLandDataByNameYear(name, year);
}

export const getAllData = async (req, res) => {
    const [rows] = await db.query(`SELECT * FROM LANDDATA`);
    return rows;
  }

// gets data for one record by name and year
export const getLandDataByNameYear = async (name, year) => {
    const [rows] = await db.query(`
    SELECT *
    FROM LANDDATA
    WHERE countryName = ? AND year = ?
    `, [name, year]);
    return rows[0];
}

// gets all data for records above a specified land area 
export const getLandDataByAreaG = async (year, landArea) => {
    const [rows] = await db.query(`
    SELECT *
    FROM LANDDATA
    WHERE year = ? AND landArea > ?
    `, [year, landArea]);
    return rows;
}

// gets all data for records below a specified land area 
export const getLandDataByAreaL = async (year, landArea) => {
    const [rows] = await db.query(`
    SELECT *
    FROM LANDDATA
    WHERE year = ? AND landArea < ?
    `, [year, landArea]);
    return rows;
}

// gets all data for records above a specified water withdrawal
export const getLandDataByYearWithdrawalG = async (year, waterWithdrawal) => {
    const [rows] = await db.query(`
    SELECT *
    FROM LANDDATA
    WHERE year = ? AND waterWithdrawal > ?
    `, [year, waterWithdrawal]);
    return rows;
}

// gets all data for records below a specified water withdrawal
export const getLandDataByYearWithdrawalL = async (year, waterWithdrawal) => {
    const [rows] = await db.query(`
    SELECT *
    FROM LANDDATA
    WHERE year = ? AND waterWithdrawal < ?
    `, [year, waterWithdrawal]);
    return rows;
}
