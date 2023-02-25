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
    const { emissionLevel, tempHigh, tempLow } = req.body;
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
router.get("/:countryName/:year", async (req, res) => {
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
router.get("/:year/:emissionLevel", async (req, res) => {
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
 * Route gets all atmosphericData based on year, tempHigh property from request params
 * 
 * @param request - HTTP request. Contains year, tempHigh in params.
 * @param response - HTTP response. Responds with atmosphericData based on year, tempHigh params and status code based on functionality of route.
 */
router.get("/:year/:tempHigh", async (req, res) => {
  try {
    const year = req.params.year;
    const tempHigh = req.params.tempHigh;
    const atmopshericData = 1; // use function from atmosphericDataQuery
    res.status(200).send(atmopshericData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all atmosphericData based on year, tempLow property from request params
 * 
 * @param request - HTTP request. Contains year, tempLow in params.
 * @param response - HTTP response. Responds with atmosphericData based on year, tempLow params and status code based on functionality of route.
 */
router.get("/:year/:tempLow", async (req, res) => {
  try {
    const year = req.params.year;
    const tempLow = req.params.tempLow;
    const atmopshericData = 1; // use function from atmosphericDataQuery
    res.status(200).send(atmopshericData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
