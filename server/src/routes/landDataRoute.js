import { Router } from "express";

import { insertLandData,
getAllData,
getLandDataByNameYear,
getLandDataByAreaG,
getLandDataByAreaL,
getLandDataByYearWithdrawalG,
getLandDataByYearWithdrawalL } from "../queries/landDataQuery.js";

const router = Router();

/**
 * Route creates a new landData based on countryName, year with properties from request body and stores it into db
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with posted landData and status code based on functionality of route.
 */
router.post("/:countryName/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const { landArea, waterWithdrawal } = req.body;
    const landData = await insertLandData(countryName, year, landArea, waterWithdrawal);
    res.status(201).send(landData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const landData = await getAllData();
    res.status(200).send(landData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
})

/**
 * Route gets one landData based on countryName, year property from request params
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with landData based on countryName, year params and status code based on functionality of route.
 */
router.get("/name/:countryName/year/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const landData = await getLandDataByNameYear(countryName, year);
    res.status(200).send(landData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all landData based on year, landArea property from request params
 * 
 * @param request - HTTP request. Contains year, landArea in params.
 * @param response - HTTP response. Responds with landData based on year, landArea params and status code based on functionality of route.
 */
router.get("/year/:year/landArea/g/:landArea", async (req, res) => {
  try {
    const year = req.params.year;
    const landArea = req.params.landArea;
    const landData = await getLandDataByAreaG(year, landArea);
    res.status(200).send(landData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all landData based on year, landArea property from request params
 * 
 * @param request - HTTP request. Contains year, landArea in params.
 * @param response - HTTP response. Responds with landData based on year, landArea params and status code based on functionality of route.
 */
router.get("/year/:year/landArea/l/:landArea", async (req, res) => {
  try {
    const year = req.params.year;
    const landArea = req.params.landArea;
    const landData = await getLandDataByAreaL(year, landArea);
    res.status(200).send(landData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all landData based on year, waterWithdrawal property from request params
 * 
 * @param request - HTTP request. Contains year, waterWithdrawal in params.
 * @param response - HTTP response. Responds with landData based on year, waterWithdrawal params and status code based on functionality of route.
 */
router.get("/year/:year/waterWithdrawal/g/:waterWithdrawal", async (req, res) => {
  try {
    const year = req.params.year;
    const waterWithdrawal = req.params.waterWithdrawal;
    const landData = await getLandDataByYearWithdrawalG(year, waterWithdrawal);
    res.status(200).send(landData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all landData based on year, waterWithdrawal property from request params
 * 
 * @param request - HTTP request. Contains year, waterWithdrawal in params.
 * @param response - HTTP response. Responds with landData based on year, waterWithdrawal params and status code based on functionality of route.
 */
router.get("/year/:year/waterWithdrawal/l/:waterWithdrawal", async (req, res) => {
  try {
    const year = req.params.year;
    const waterWithdrawal = req.params.waterWithdrawal;
    const landData = await getLandDataByYearWithdrawalL(year, waterWithdrawal);
    res.status(200).send(landData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
