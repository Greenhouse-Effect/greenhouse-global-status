import { Router } from "express";
import { getPoliticalData, insertPoliticalData, getPoliticalHDI, getPoliticalSDG } from '../queries/politicalDataQuery.js';

const router = Router();

/**
 * Route creates a new politicalData based on countryName, year with properties from request body and stores it into db
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with posted politicalData and status code based on functionality of route.
 */
router.post("/:countryName/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const { sdg, hdi } = req.body;
    const politicalData = await insertPoliticalData(countryName, year, sdg, hdi);
    res.status(201).send(politicalData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets one politicalData based on countryName, year property from request params
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with politicalData based on countryName, year params and status code based on functionality of route.
 */
router.get("/name/:countryName/year/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const politicalData = await getPoliticalData(countryName, year);
    res.status(200).send(politicalData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all politicalData based on year, sdg property from request params
 * 
 * @param request - HTTP request. Contains year, sdg in params.
 * @param response - HTTP response. Responds with politicalData based on year, sdg params and status code based on functionality of route.
 */
router.get("/year/:year/sdg/:sdg", async (req, res) => {
  try {
    const year = req.params.year;
    const sdg = req.params.sdg;
    const politicalData = await getPoliticalSDG(year, sdg);
    res.status(200).send(politicalData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all politicalData based on year, hdi property from request params
 * 
 * @param request - HTTP request. Contains year, hdi in params.
 * @param response - HTTP response. Responds with politicalData based on year, hdi params and status code based on functionality of route.
 */
router.get("/year/:year/hdi/:hdi", async (req, res) => {
  try {
    const year = req.params.year;
    const hdi = req.params.hdi;
    const politicalData = await getPoliticalHDI(year, hdi);
    res.status(200).send(politicalData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
