import { Router } from 'express';
import { getOceanData, insertOceanData, getOceanTempHigh, getOceanTempLow, getOceanSinkLevel, getOceanSeaLevel } from '../queries/oceanDataQuery.js';

const router = Router();

/**
 * Route creates a new oceanData based on oceanName, year with properties from request body and stores it into db
 * 
 * @param request - HTTP request. Contains oceanName in params.
 * @param response - HTTP response. Responds with posted oceanData and status code based on functionality of route.
 */
router.post("/:oceanName/:year", async (req, res) => {
  try {
    const oceanName = req.params.oceanName;
    const year = req.params.year;
    const { sinkLevel, tempHigh, tempLow, seaLevel } = req.body;
    const oceanData = await insertOceanData(oceanName, year, sinkLevel, tempHigh, tempLow, seaLevel);
    res.status(201).send(oceanData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets one oceanData based on oceanName, year property from request params
 * 
 * @param request - HTTP request. Contains oceanName, year in params.
 * @param response - HTTP response. Responds with oceanData based on oceanName, year params and status code based on functionality of route.
 */
router.get("/name/:oceanName/year/:year", async (req, res) => {
  try {
    const oceanName = req.params.oceanName;
    const year = req.params.year;
    const oceanData = await getOceanData(oceanName, year);
    res.status(200).send(oceanData);
  } catch(err) {
    res.status(500).jason({ message: err.message });
  }
});

/**
 * Route gets all oceanData based on year, sinkLevel property from request params
 * 
 * @param request - HTTP request. Contains year, sinkLevel in params.
 * @param response - HTTP response. Responds with oceanData based on oceanName params and status code based on functionality of route.
 */
router.get("/year/:year/sinkLevel/:sinkLevel", async (req, res) => {
  try {
    const year = req.params.year;
    const sinkLevel = req.params.sinkLevel;
    const oceanData = await getOceanSinkLevel(year, sinkLevel);
    res.status(200).send(oceanData);
  } catch(err) {
    res.status(500).jason({ message: err.message });
  }
});

/**
 * Route gets all oceanData based on year, tempHigh property from request params
 * 
 * @param request - HTTP request. Contains year, tempHigh in params.
 * @param response - HTTP response. Responds with oceanData based on oceanName params and status code based on functionality of route.
 */
router.get("/year/:year/tempHigh/:tempHigh", async (req, res) => {
  try {
    const year = req.params.year;
    const tempHigh = req.params.tempHigh;
    const oceanData = await getOceanTempHigh(year, tempHigh);
    res.status(200).send(oceanData);
  } catch(err) {
    res.status(500).jason({ message: err.message });
  }
});

/**
 * Route gets all oceanData based on year, tempLow property from request params
 * 
 * @param request - HTTP request. Contains year, tempLow in params.
 * @param response - HTTP response. Responds with oceanData based on oceanName params and status code based on functionality of route.
 */
router.get("/year/:year/tempLow/:tempLow", async (req, res) => {
  try {
    const year = req.params.year;
    const tempLow = req.params.tempLow;
    const oceanData = await getOceanTempLow(year, tempLow);
    res.status(200).send(oceanData);
  } catch(err) {
    res.status(500).jason({ message: err.message });
  }
});

/**
 * Route gets all oceanData based on year, seaLevel property from request params
 * 
 * @param request - HTTP request. Contains year, seaLevel in params.
 * @param response - HTTP response. Responds with oceanData based on oceanName params and status code based on functionality of route.
 */
router.get("/year/:year/seaLevel/:seaLevel", async (req, res) => {
  try {
    const year = req.params.year;
    const seaLevel = req.params.seaLevel;
    const oceanData = await getOceanSeaLevel(year, seaLevel);
    res.status(200).send(oceanData);
  } catch(err) {
    res.status(500).jason({ message: err.message });
  }
});

export default router;
