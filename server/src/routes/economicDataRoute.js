import { Router } from "express";

const router = Router();

/**
 * Route creates a new economicData based on countryName, year with properties from request body and stores it into db
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with posted economicData and status code based on functionality of route.
 */
router.post("/:countryName/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const { gdp, transitionBudget } = req.body;
    const economicData = 1; // use function from economicDataQuery
    res.status(201).send(economicData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets one economicData based on countryName, year property from request params
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with economicData based on countryName, year params and status code based on functionality of route.
 */
router.get("/:countryName/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const economicData = 1; // use function from economicDataQuery
    res.status(200).send(economicData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all economicData based on year, gdp property from request params
 * 
 * @param request - HTTP request. Contains year, gdp in params.
 * @param response - HTTP response. Responds with economicData based on year, gdp params and status code based on functionality of route.
 */
router.get("/:year/:gdp", async (req, res) => {
  try {
    const year = req.params.year;
    const gdp = req.params.gdp;
    const economicData = 1; // use function from economicDataQuery
    res.status(200).send(economicData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all economicData based on year, transitionBudget property from request params
 * 
 * @param request - HTTP request. Contains year, transitionBudget in params.
 * @param response - HTTP response. Responds with economicData based on year, transitionBudget params and status code based on functionality of route.
 */
router.get("/:year/:transitionBudget", async (req, res) => {
  try {
    const year = req.params.year;
    const transitionBudget = req.params.transitionBudget;
    const economicData = 1; // use function from economicDataQuery
    res.status(200).send(economicData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
