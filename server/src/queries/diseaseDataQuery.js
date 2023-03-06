import { db } from "../database.js";

export const insertDiseaseData = async (name, year, rabies, malaria, infection) => {
  await db.query(`
  INSERT INTO DISEASEDATA (countryName, year, rabiesIncidence, malariaIncidence, countryInfection) 
  VALUES (?, ?, ?, ?, ?)
  `, [name, year, rabies, malaria, infection]);
  return getDiseaseData(name, year);
}

export const getDiseaseData = async (name, year) => {
  const [rows] = await db.query(`
  SELECT *
  FROM DISEASEDATA
  WHERE countryName = ? AND year = ?
  `, [name, year]);
  return rows[0]
}

export const getDiseaseRabiesG = async (year, rabies) => {
  const [rows] = await db.query(`
  SELECT countryName, year, rabiesIncidence
  FROM DISEASEDATA
  WHERE year = ? AND rabiesIncidence > ?
  `, [year, rabies]);
  return rows;
}

export const getDiseaseRabiesL = async (year, rabies) => {
  const [rows] = await db.query(`
  SELECT countryName, year, rabiesIncidence
  FROM DISEASEDATA
  WHERE year = ? AND rabiesIncidence < ?
  `, [year, rabies]);
  return rows;
}

export const getDiseaseMalariaG = async (year, malaria) => {
  const [rows] = await db.query(`
  SELECT countryName, year, malariaIncidence
  FROM DISEASEDATA
  WHERE year = ? AND malariaIncidence > ?
  `, [year, malaria]);
  return rows;
}

export const getDiseaseMalariaL = async (year, malaria) => {
  const [rows] = await db.query(`
  SELECT countryName, year, malariaIncidence
  FROM DISEASEDATA
  WHERE year = ? AND malariaIncidence < ?
  `, [year, malaria]);
  return rows;
}

export const getDiseaseInfectionG = async (year, infection) => {
  const [rows] = await db.query(`
  SELECT countryName, year, countryInfection
  FROM DISEASEDATA
  WHERE year = ? AND countryInfection > ?
  `, [year, infection]);
  return rows;
}

export const getDiseaseInfectionL = async (year, infection) => {
  const [rows] = await db.query(`
  SELECT countryName, year, countryInfection
  FROM DISEASEDATA
  WHERE year = ? AND countryInfection < ?
  `, [year, infection]);
  return rows;
}
