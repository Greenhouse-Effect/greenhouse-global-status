import { db } from '../database.js'

export const insertEnergyData = async (name, year, naturalGas, fuelOil, coal) => {
  await db.query(`
  INSERT INTO ENERGYDATA (countryName, year, naturalGasEmissions, fuelOilEmissions, coalEmissions) 
  VALUES (?, ?, ?, ?, ?)
  `, [name, year, naturalGas, fuelOil, coal]);
  return getEnergyData(name, year);
}

export const getEnergyData = async (name, year) => {
  const [rows] = await db.query(`
  SELECT *
  FROM ENERGYDATA
  WHERE countryName = ? AND year = ?
  `, [name, year]);
  return rows[0]
}

export const getEnergyNaturalGasG = async (year, naturalGas) => {
  const [rows] = await db.query(`
  SELECT countryName, year, naturalGasEmissions
  FROM ENERGYDATA
  WHERE year = ? AND naturalGasEmissions > ?
  `, [year, naturalGas]);
  return rows;
}

export const getEnergyNaturalGasL = async (year, naturalGas) => {
  const [rows] = await db.query(`
  SELECT countryName, year, naturalGasEmissions
  FROM ENERGYDATA
  WHERE year = ? AND naturalGasEmissions < ?
  `, [year, naturalGas]);
  return rows;
}

export const getEnergyFuelOilG = async (year, fuelOil) => {
  const [rows] = await db.query(`
  SELECT countryName, year, fuelOilEmissions
  FROM ENERGYDATA
  WHERE year = ? AND fuelOilEmissions > ?
  `, [year, fuelOil]);
  return rows;
}

export const getEnergyFuelOilL = async (year, fuelOil) => {
  const [rows] = await db.query(`
  SELECT countryName, year, fuelOilEmissions
  FROM ENERGYDATA
  WHERE year = ? AND fuelOilEmissions < ?
  `, [year, fuelOil]);
  return rows;
}

export const getEnergyCoalG = async (year, coal) => {
  const [rows] = await db.query(`
  SELECT countryName, year, coalEmissions
  FROM ENERGYDATA
  WHERE year = ? AND coalEmissions > ?
  `, [year, coal]);
  return rows;
}

export const getEnergyCoalL = async (year, coal) => {
  const [rows] = await db.query(`
  SELECT countryName, year, coalEmissions
  FROM ENERGYDATA
  WHERE year = ? AND coalEmissions < ?
  `, [year, coal]);
  return rows;
}
