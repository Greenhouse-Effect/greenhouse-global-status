import { Router } from "express";

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
    const { hdi, gni } = req.body;
    const politicalData = 1; // use function from politicalDataQuery
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
    const politicalData = 1; // use function from politicalDataQuery
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
router.get("/year/:year/hdi/g/:hdi", async (req, res) => {
  try {
    const year = req.params.year;
    const hdi = req.params.hdi;
    const politicalData = 1; // use function from politicalDataQuery
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
router.get("/year/:year/hdi/l/:hdi", async (req, res) => {
  try {
    const year = req.params.year;
    const hdi = req.params.hdi;
    const politicalData = 1; // use function from politicalDataQuery
    res.status(200).send(politicalData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all politicalData based on year, gni property from request params
 * 
 * @param request - HTTP request. Contains year, gni in params.
 * @param response - HTTP response. Responds with politicalData based on year, gni params and status code based on functionality of route.
 */
router.get("/year/:year/gni/g/:gni", async (req, res) => {
  try {
    const year = req.params.year;
    const gni = req.params.gni;
    const politicalData = 1; // use function from politicalDataQuery
    res.status(200).send(politicalData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all politicalData based on year, gni property from request params
 * 
 * @param request - HTTP request. Contains year, gni in params.
 * @param response - HTTP response. Responds with politicalData based on year, gni params and status code based on functionality of route.
 */
router.get("/year/:year/gni/l/:gni", async (req, res) => {
  try {
    const year = req.params.year;
    const gni = req.params.gni;
    const politicalData = 1; // use function from politicalDataQuery
    res.status(200).send(politicalData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
