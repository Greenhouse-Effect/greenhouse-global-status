import { Router } from 'express';

import {
  insertAtmosphericData,
  getAtmosphericData,
  getAtmosphericEmissionsG,
  getAtmosphericEmissionsL,
  getAtmosphericTempChangeG,
  getAtmosphericTempChangeL,
} from '../queries/atmosphericDataQuery.js';

const router = Router();

/**
 * Route creates a new atmosphericData based on countryName, year with properties from request body and stores it into db
 *
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with posted atmosphericData and status code based on functionality of route.
 */
router.post('/:countryName/:year', async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const { emissions, tempChange } = req.body;
    const atmopshericData = await insertAtmosphericData(
      countryName,
      year,
      emissions,
      tempChange
    );
    res.status(201).send(atmopshericData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets one atmosphericData based on countryName, year property from request params
 *
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with atmosphericData based on countryName, year params and status code based on functionality of route.
 */
router.get('/name/:countryName/year/:year', async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const atmopshericData = await getAtmosphericData(countryName, year);
    res.status(200).send(atmopshericData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all atmosphericData based on year, emissions property from request params
 *
 * @param request - HTTP request. Contains year, emissions in params.
 * @param response - HTTP response. Responds with atmosphericData based on year, emissions params and status code based on functionality of route.
 */
router.get('/year/:year/emissions/g/:emissions', async (req, res) => {
  try {
    const year = req.params.year;
    const emissions = req.params.emissions;
    const atmopshericData = await getAtmosphericEmissionsG(year, emissions);
    res.status(200).send(atmopshericData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all atmosphericData based on year, emissions property from request params
 *
 * @param request - HTTP request. Contains year, emissions in params.
 * @param response - HTTP response. Responds with atmosphericData based on year, emissions params and status code based on functionality of route.
 */
router.get('/year/:year/emissions/l/:emissions', async (req, res) => {
  try {
    const year = req.params.year;
    const emissions = req.params.emissions;
    const atmopshericData = await getAtmosphericEmissionsL(year, emissions);
    res.status(200).send(atmopshericData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all atmosphericData based on year, tempChange property from request params
 *
 * @param request - HTTP request. Contains year, tempChange in params.
 * @param response - HTTP response. Responds with atmosphericData based on year, tempChange params and status code based on functionality of route.
 */
router.get('/year/:year/tempChange/g/:tempChange', async (req, res) => {
  try {
    const year = req.params.year;
    const tempChange = req.params.tempChange;
    const atmopshericData = await getAtmosphericTempChangeG(year, tempChange);
    res.status(200).send(atmopshericData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all atmosphericData based on year, tempChange property from request params
 *
 * @param request - HTTP request. Contains year, tempChange in params.
 * @param response - HTTP response. Responds with atmosphericData based on year, tempChange params and status code based on functionality of route.
 */
router.get('/year/:year/tempChange/l/:tempChange', async (req, res) => {
  try {
    const year = req.params.year;
    const tempChange = req.params.tempChange;
    const atmopshericData = await getAtmosphericTempChangeL(year, tempChange);
    res.status(200).send(atmopshericData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// dont need a route for tempUnit as it is consistant and is something the user will never query for

export default router;
