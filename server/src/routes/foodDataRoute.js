import { Router } from "express";

import { insertFoodData,
getFoodData,
getFoodDataRiceG,
getFoodDataRiceL,
getFoodDataCornG,
getFoodDataCornL,
getFoodDataWheatG,
getFoodDataWheatL } from "../queries/foodQuery.js";

const router = Router();

/**
 * Route creates a new foodData based on countryName, year with properties from request body and stores it into db
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with posted foodData and status code based on functionality of route.
 */
router.post("/:countryName/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const { rice, corn, wheat } = req.body;
    const foodData = await insertFoodData(countryName, year, rice, corn, wheat);
    res.status(201).send(foodData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets one foodData based on countryName, year property from request params
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with foodData based on countryName, year params and status code based on functionality of route.
 */
router.get("/name/:countryName/year/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const foodData = await getFoodData(countryName, year);
    res.status(200).send(foodData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all foodData based on year, rice property from request params
 * 
 * @param request - HTTP request. Contains year, rice in params.
 * @param response - HTTP response. Responds with foodData based on year, rice params and status code based on functionality of route.
 */
router.get("/year/:year/rice/g/:rice", async (req, res) => {
  try {
    const year = req.params.year;
    const rice = req.params.rice;
    const foodData = await getFoodDataRiceG(year, rice)
    res.status(200).send(foodData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});



/**
 * Route gets all foodData based on year, rice property from request params
 * 
 * @param request - HTTP request. Contains year, rice in params.
 * @param response - HTTP response. Responds with foodData based on year, rice params and status code based on functionality of route.
 */
router.get("/year/:year/rice/l/:rice", async (req, res) => {
  try {
    const year = req.params.year;
    const rice = req.params.rice;
    const foodData = await getFoodDataRiceL(year, rice);
    res.status(200).send(foodData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all foodData based on year, corn property from request params
 * 
 * @param request - HTTP request. Contains year, corn in params.
 * @param response - HTTP response. Responds with foodData based on year, corn params and status code based on functionality of route.
 */
router.get("/year/:year/corn/g/:corn", async (req, res) => {
  try {
    const year = req.params.year;
    const corn = req.params.corn;
    const foodData = await getFoodDataCornG(year, corn)
    res.status(200).send(foodData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all foodData based on year, corn property from request params
 * 
 * @param request - HTTP request. Contains year, corn in params.
 * @param response - HTTP response. Responds with foodData based on year, corn params and status code based on functionality of route.
 */
router.get("/year/:year/corn/l/:corn", async (req, res) => {
  try {
    const year = req.params.year;
    const corn = req.params.corn;
    const foodData = await getFoodDataCornL(year, corn);
    res.status(200).send(foodData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all foodData based on year, wheat property from request params
 * 
 * @param request - HTTP request. Contains year, wheat in params.
 * @param response - HTTP response. Responds with foodData based on year, wheat params and status code based on functionality of route.
 */
router.get("/year/:year/wheat/g/:wheat", async (req, res) => {
  try {
    const year = req.params.year;
    const wheat = req.params.wheat;
    const foodData = await getFoodDataWheatG(year, wheat)
    res.status(200).send(foodData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all foodData based on year, wheat property from request params
 * 
 * @param request - HTTP request. Contains year, wheat in params.
 * @param response - HTTP response. Responds with foodData based on year, wheat params and status code based on functionality of route.
 */
router.get("/year/:year/wheat/l/:wheat", async (req, res) => {
  try {
    const year = req.params.year;
    const wheat = req.params.wheat;
    const foodData = await getFoodDataWheatL(year, wheat);
    res.status(200).send(foodData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;