import { db } from '../database.js'

// gets the entire table
export const insertLandData = async (name, year, landArea, waterWithdrawal) => {
  await db.query(`
  INSERT INTO LANDDATA (countryName, year, landArea, waterWithdrawal)
  VALUES (? ? ? ?)
  `, [name, year, landArea, waterWithdrawal]);
  return getLandData(name, year, landArea, waterWithdrawal);
}
// gets data for one record by name and year
export const getLandDataByNameYear = async (name, year) => {
    await db.query(`
    SELECT *
    FROM LANDDATA
    WHERE countryName = ? AND year = ?
    `, [name, year]);
    return rows;
}
  
// gets all data for records of given year and above a specified land area 
export const getLandDataByYearArea = async (year, landArea) => {
    await db.query(`
    SELECT *
    FROM LANDDATA
    WHERE year = ? AND landArea > ?
    `, [year, landArea]);
    return rows;
}


// gets all data for records of given year and above a specified emissions level
export const getLandDataByYearEmissions = async (year, emissions) => {
    await db.query(`
    SELECT *
    FROM LANDDATA
    WHERE year = ? AND emissions > ?
    `, [year, emissions]);
    return rows;
}

// gets all data for records of given year and above a specified water withdrawal
export const getLandDataByYearWithdrawal = async (year, waterWithdrawal) => {
    await db.query(`
    SELECT *
    FROM LANDDATA
    WHERE year = ? AND waterWithdrawal > ?
    `, [year, waterWithdrawal]);
    return rows;
}