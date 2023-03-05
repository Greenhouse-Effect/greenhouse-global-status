import { db } from '../database.js'

// gets the entire table
export const insertLandData = async (name, year, landArea, waterWithdrawal) => {
  const [rows] = await db.query(`
  INSERT INTO LANDDATA (countryName, year, landArea, waterWithdrawal)
  VALUES (? ? ? ?)
  `, [name, year, landArea, waterWithdrawal]);
  return getLandData(name, year, landArea, waterWithdrawal);
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
export const getLandDataByAreaG = async (countryName, landArea) => {
    const [rows] = await db.query(`
    SELECT *
    FROM LANDDATA
    WHERE countryName = ? AND landArea > ?
    `, [countryName, landArea]);
    return rows[0];
}

// gets all data for records below a specified land area 
export const getLandDataByAreaL = async (countryName, landArea) => {
    const [rows] = await db.query(`
    SELECT *
    FROM LANDDATA
    WHERE countryName = ? AND landArea < ?
    `, [countryName, landArea]);
    return rows[0];
}

// gets all data for records above a specified water withdrawal
export const getLandDataByYearWithdrawalG = async (countryName, year, waterWithdrawal) => {
    const [rows] = await db.query(`
    SELECT *
    FROM LANDDATA
    WHERE countryName = ? AND year = ? AND waterWithdrawal > ?
    `, [countryName, year, waterWithdrawal]);
    return rows[0];
}

// gets all data for records below a specified water withdrawal
export const getLandDataByYearWithdrawalL = async (countryName, year, waterWithdrawal) => {
    const [rows] = await db.query(`
    SELECT *
    FROM LANDDATA
    WHERE countryName = ? AND year = ? AND waterWithdrawal < ?
    `, [countryName, year, waterWithdrawal]);
    return rows[0];
}