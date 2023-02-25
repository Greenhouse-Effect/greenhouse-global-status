import { Router } from 'express';
import { getCountries, getCountry, insertCountry } from '../queries/countryQuery.js';

const router = Router();

/**
 * Route creates a new country with properties from request body and stores it into db
 * 
 * @param request - HTTP request. Contains name, population in body.
 * @param response - HTTP response. Responds with posted country and status code based on functionality of route.
 */
router.post("/", async (req, res) => {
  try {
    const { name, population } = req.body;
    const country = await insertCountry(name, population);
    res.status(201).send(country);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all countries from db
 * 
 * @param request - HTTP request.
 * @param response - HTTP response. Responds with all countries and status code based on functionality of route.
 */
router.get("/", async (req, res) => {
  try {
    const countries = await getCountries();
    res.status(200).send(countries);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets one country based on name property from request params
 * 
 * @param request - HTTP request. Contains name in params.
 * @param response - HTTP response. Responds with one country and status code based on functionality of route.
 */
router.get("/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const country = await getCountry(name);
    res.status(200).send(country);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all countries based on population property from request params
 * 
 * @param request - HTTP request. Contains population in params.
 * @param response - HTTP response. Responds with countries whose population are greater than the request param and 
 *                  status code based on functionality of route.
 */
router.get("/:population", async (req, res) => {
  try {
    const population = req.params.population;
    const countries = 1; // use function from countryQueries
    res.status(200).send(countries);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all countries based on populationChange property from request params
 * 
 * @param request - HTTP request. Contains population yearly change in params.
 * @param response - HTTP response. Responds with countries whose population yearly change are greater than the request param and 
 *                  status code based on functionality of route.
 */
router.get("/:populationChange", (req, res) => {
  try {
    const populationChange = req.params.populationChange;
    const countries = 1; // use function from countryQueries
    res.status(200).send(countries);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
