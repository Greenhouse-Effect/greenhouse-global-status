import { Router } from "express";

import { insertDisasterData,
getAllData,
getDisasterData,
getDisasterDataDeathsG,
getDisasterDataDeathsL,
getDisasterDataHomelessnessG,
getDisasterDataHomelessnessL,
getDisasterDataEconomicDamagesG,
getDisasterDataEconomicDamagesL
} from "../queries/disasterDataQuery.js";

const router = Router();

/**
 * Route creates a new disasterData based on countryName, year with properties from request body and stores it into db
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with posted disasterData and status code based on functionality of route.
 */
router.post("/:countryName/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const { deaths, homelessness, economicDamages } = req.body;
    const disasterData = await insertDisasterData(countryName, year, deaths, homelessness, economicDamages);
    res.status(201).send(disasterData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const disasterData = await getAllData();
    res.status(200).send(disasterData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
})

/**
 * Route gets one disasterData based on countryName, year property from request params
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with disasterData based on countryName, year params and status code based on functionality of route.
 */
router.get("/name/:countryName/year/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const disasterData = await getDisasterData(countryName, year);
    res.status(200).send(disasterData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all disasterData based on year, deaths property from request params
 * 
 * @param request - HTTP request. Contains year, deaths in params.
 * @param response - HTTP response. Responds with disasterData based on year, deaths params and status code based on functionality of route.
 */
router.get("/year/:year/deaths/g/:deaths", async (req, res) => {
  try {
    const year = req.params.year;
    const deaths = req.params.deaths;
    const disasterData = await getDisasterDataDeathsG(year, deaths)
    res.status(200).send(disasterData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all disasterData based on year, deaths property from request params
 * 
 * @param request - HTTP request. Contains year, deaths in params.
 * @param response - HTTP response. Responds with disasterData based on year, deaths params and status code based on functionality of route.
 */
router.get("/year/:year/deaths/l/:deaths", async (req, res) => {
  try {
    const year = req.params.year;
    const deaths = req.params.deaths;
    const disasterData = await getDisasterDataDeathsL(year, deaths)
    res.status(200).send(disasterData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all disasterData based on year, homelessness property from request params
 * 
 * @param request - HTTP request. Contains year, homelessness in params.
 * @param response - HTTP response. Responds with disasterData based on year, homelessness params and status code based on functionality of route.
 */
router.get("/year/:year/homelessness/g/:homelessness", async (req, res) => {
  try {
    const year = req.params.year;
    const homelessness = req.params.homelessness;
    const disasterData = await getDisasterDataHomelessnessG(year, homelessness)
    res.status(200).send(disasterData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all disasterData based on year, homelessness property from request params
 * 
 * @param request - HTTP request. Contains year, homelessness in params.
 * @param response - HTTP response. Responds with disasterData based on year, homelessness params and status code based on functionality of route.
 */
router.get("/year/:year/homelessness/l/:homelessness", async (req, res) => {
  try {
    const year = req.params.year;
    const homelessness = req.params.homelessness;
    const disasterData = await getDisasterDataHomelessnessL(year, homelessness)
    res.status(200).send(disasterData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all disasterData based on year, economicDamages property from request params
 * 
 * @param request - HTTP request. Contains year, economicDamages in params.
 * @param response - HTTP response. Responds with disasterData based on year, economicDamages params and status code based on functionality of route.
 */
router.get("/year/:year/economicDamages/g/:economicDamages", async (req, res) => {
  try {
    const year = req.params.year;
    const economicDamages = req.params.economicDamages;
    const disasterData = await getDisasterDataEconomicDamagesG(year, economicDamages)
    res.status(200).send(disasterData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all disasterData based on year, economicDamages property from request params
 * 
 * @param request - HTTP request. Contains year, economicDamages in params.
 * @param response - HTTP response. Responds with disasterData based on year, economicDamages params and status code based on functionality of route.
 */
router.get("/year/:year/economicDamages/l/:economicDamages", async (req, res) => {
  try {
    const year = req.params.year;
    const economicDamages = req.params.economicDamages;
    const disasterData = await getDisasterDataEconomicDamagesL(year, economicDamages)
    res.status(200).send(disasterData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
