import { db } from '../database.js'


export const getOceanData = async (name, year) => {
  const [rows] = await db.query(`
  SELECT *
  FROM OCEANDATA
  WHERE oceanName = ? AND year = ?
  `, [name, year]);
  return rows[0]
}

export const insertOceanData = async (name, year, sinkLevel, tempHigh, tempLow, seaLevel) => {
  await db.query(`
  INSERT INTO OCEANDATA (oceanName, year, sinkLevel, tempHigh, tempLow, seaLevel) 
  VALUES (?, ?, ?, ?, ?, ?)
  `, [name, year, sinkLevel, tempHigh, tempLow, seaLevel]);
  return getOceanData(name, year);
}

export const getOceanTempHigh = async (year, tempHigh) => {
    const [rows] = await db.query(`
    SELECT oceanName, tempHigh
    FROM OCEANDATA
    WHERE year = ? AND tempHigh >= ?
    `, [year, tempHigh]);
    return rows;
  }
  
  export const getOceanTempLow = async (year, tempLow) => {
    const [rows] = await db.query(`
    SELECT oceanName, tempLow
    FROM OCEANDATA
    WHERE year = ? AND tempLow <= ?
    `, [year, tempLow]);
    return rows;
  }
  
  export const getOceanSinkLevel = async (year, sinkLevel) => {
    const [rows] = await db.query(`
    SELECT oceanName, sinkLevel
    FROM OCEANDATA
    WHERE year = ? AND sinkLevel >= ?
    `, [year, sinkLevel]);
    return rows;
  }

  export const getOceanSeaLevel = async (year, seaLevel) => {
    const [rows] = await db.query(`
    SELECT oceanName, seaLevel
    FROM OCEANDATA
    WHERE year = ? AND seaLevel >= ?
    `, [year, seaLevel]);
    return rows;
  }