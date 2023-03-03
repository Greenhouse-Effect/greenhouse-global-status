import { Router } from "express";

const router = Router();

/**
 * Route creates a new eneryData based on countryName, year with properties from request body and stores it into db
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with posted eneryData and status code based on functionality of route.
 */
router.post("/:countryName/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const { naturalGas, fuelOil, coal } = req.body;
    const eneryData = 1; // use function from eneryDataQuery
    res.status(201).send(eneryData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets one energyData based on countryName, year property from request params
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with energyData based on countryName, year params and status code based on functionality of route.
 */
router.get("/name/:countryName/year/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const energyData = 1; // use function from energyDataQuery
    res.status(200).send(energyData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all energyData based on year, naturalGas property from request params
 * 
 * @param request - HTTP request. Contains year, naturalGas in params.
 * @param response - HTTP response. Responds with energyData based on year, naturalGas params and status code based on functionality of route.
 */
router.get("/year/:year/naturalGas/g/:naturalGas", async (req, res) => {
  try {
    const year = req.params.year;
    const naturalGas = req.params.naturalGas;
    const energyData = 1; // use function from energyDataQuery
    res.status(200).send(energyData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all energyData based on year, naturalGas property from request params
 * 
 * @param request - HTTP request. Contains year, naturalGas in params.
 * @param response - HTTP response. Responds with energyData based on year, naturalGas params and status code based on functionality of route.
 */
router.get("/year/:year/naturalGas/l/:naturalGas", async (req, res) => {
  try {
    const year = req.params.year;
    const naturalGas = req.params.naturalGas;
    const energyData = 1; // use function from energyDataQuery
    res.status(200).send(energyData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all energyData based on year, fuelOil property from request params
 * 
 * @param request - HTTP request. Contains year, fuelOil in params.
 * @param response - HTTP response. Responds with energyData based on year, fuelOil params and status code based on functionality of route.
 */
router.get("/year/:year/fuelOil/g/:fuelOil", async (req, res) => {
  try {
    const year = req.params.year;
    const fuelOil = req.params.fuelOil;
    const energyData = 1; // use function from energyDataQuery
    res.status(200).send(energyData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all energyData based on year, fuelOil property from request params
 * 
 * @param request - HTTP request. Contains year, fuelOil in params.
 * @param response - HTTP response. Responds with energyData based on year, fuelOil params and status code based on functionality of route.
 */
router.get("/year/:year/fuelOil/l/:fuelOil", async (req, res) => {
  try {
    const year = req.params.year;
    const fuelOil = req.params.fuelOil;
    const energyData = 1; // use function from energyDataQuery
    res.status(200).send(energyData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all energyData based on year, coal property from request params
 * 
 * @param request - HTTP request. Contains year, coal in params.
 * @param response - HTTP response. Responds with energyData based on year, coal params and status code based on functionality of route.
 */
router.get("/year/:year/coal/g/:coal", async (req, res) => {
  try {
    const year = req.params.year;
    const coal = req.params.coal;
    const energyData = 1; // use function from energyDataQuery
    res.status(200).send(energyData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all energyData based on year, coal property from request params
 * 
 * @param request - HTTP request. Contains year, coal in params.
 * @param response - HTTP response. Responds with energyData based on year, coal params and status code based on functionality of route.
 */
router.get("/year/:year/coal/l/:coal", async (req, res) => {
  try {
    const year = req.params.year;
    const coal = req.params.coal;
    const energyData = 1; // use function from energyDataQuery
    res.status(200).send(energyData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;