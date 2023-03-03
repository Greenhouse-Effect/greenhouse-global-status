import { Router } from "express";

const router = Router();

/**
 * Route creates a new atmosphericData based on countryName, year with properties from request body and stores it into db
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with posted atmosphericData and status code based on functionality of route.
 */
router.post("/:countryName/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const { emissionLevel, tempChange, unit } = req.body;
    const atmopshericData = 1; // use function from atmosphericDataQuery
    res.status(201).send(atmopshericData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets one atmosphericData based on countryName, year property from request params
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with atmosphericData based on countryName, year params and status code based on functionality of route.
 */
router.get("/name/:countryName/year/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const atmopshericData = 1; // use function from atmosphericDataQuery
    res.status(200).send(atmopshericData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all atmosphericData based on year, emissionLevel property from request params
 * 
 * @param request - HTTP request. Contains year, emissionLevel in params.
 * @param response - HTTP response. Responds with atmosphericData based on year, emissionLevel params and status code based on functionality of route.
 */
router.get("/year/:year/emissionLevel/g/:emissionLevel", async (req, res) => {
  try {
    const year = req.params.year;
    const emissionLevel = req.params.emissionLevel;
    const atmopshericData = 1; // use function from atmosphericDataQuery
    res.status(200).send(atmopshericData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all atmosphericData based on year, emissionLevel property from request params
 * 
 * @param request - HTTP request. Contains year, emissionLevel in params.
 * @param response - HTTP response. Responds with atmosphericData based on year, emissionLevel params and status code based on functionality of route.
 */
router.get("/year/:year/emissionLevel/l/:emissionLevel", async (req, res) => {
  try {
    const year = req.params.year;
    const emissionLevel = req.params.emissionLevel;
    const atmopshericData = 1; // use function from atmosphericDataQuery
    res.status(200).send(atmopshericData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all atmosphericData based on year, tempChange property from request params
 * 
 * @param request - HTTP request. Contains year, tempChange in params.
 * @param response - HTTP response. Responds with atmosphericData based on year, tempChange params and status code based on functionality of route.
 */
router.get("/year/:year/tempChange/g/:tempChange", async (req, res) => {
  try {
    const year = req.params.year;
    const tempChange = req.params.tempChange;
    const atmopshericData = 1; // use function from atmosphericDataQuery
    res.status(200).send(atmopshericData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all atmosphericData based on year, tempChange property from request params
 * 
 * @param request - HTTP request. Contains year, tempChange in params.
 * @param response - HTTP response. Responds with atmosphericData based on year, tempChange params and status code based on functionality of route.
 */
router.get("/year/:year/tempChange/l/:tempChange", async (req, res) => {
  try {
    const year = req.params.year;
    const tempChange = req.params.tempChange;
    const atmopshericData = 1; // use function from atmosphericDataQuery
    res.status(200).send(atmopshericData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

// dont need a route for unit as it is consistant and is something the user will never query for

export default router;
