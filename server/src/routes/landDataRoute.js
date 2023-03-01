import { Router } from "express";

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
    const { landArea, emissionLevel, waterWithdrawal } = req.body;
    const landData = 1; // use function from landDataQuery
    res.status(201).send(landData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

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
    const landData = 1; // use function from landDataQuery
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
router.get("/year/:year/landArea/:landArea", async (req, res) => {
  try {
    const year = req.params.year;
    const landArea = req.params.landArea;
    const landData = 1; // use function from landDataQuery
    res.status(200).send(landData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all landData based on year, emissionLevel property from request params
 * 
 * @param request - HTTP request. Contains year, emissionLevel in params.
 * @param response - HTTP response. Responds with landData based on year, emissionLevel params and status code based on functionality of route.
 */
router.get("/year/:year/emissionLevel/:emissionLevel", async (req, res) => {
  try {
    const year = req.params.year;
    const emissionLevel = req.params.emissionLevel;
    const landData = 1; // use function from landDataQuery
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
router.get("/year/:year/waterWithdrawal/:waterWithdrawal", async (req, res) => {
  try {
    const year = req.params.year;
    const waterWithdrawal = req.params.waterWithdrawal;
    const landData = 1; // use function from landDataQuery
    res.status(200).send(landData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
