import { Router } from "express";

import { insertDiseaseData,
getDiseaseData,
getDiseaseRabiesG,
getDiseaseRabiesL,
getDiseaseMalariaG,
getDiseaseMalariaL,
getDiseaseInfectionG,
getDiseaseInfectionL } from "../queries/diseaseDataQuery.js";

const router = Router();

/**
 * Route creates a new diseaseData based on countryName, year with properties from request body and stores it into db
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with posted diseaseData and status code based on functionality of route.
 */
router.post("/:countryName/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const { rabies, malaria, infection } = req.body;
    const diseaseData = await insertDiseaseData(countryName, year, rabies, malaria, infection);
    res.status(201).send(diseaseData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets one diseaseData based on countryName, year property from request params
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with diseaseData based on countryName, year params and status code based on functionality of route.
 */
router.get("/name/:countryName/year/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const diseaseData = await getDiseaseData(countryName, year);
    res.status(200).send(diseaseData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all diseaseData based on year, rabies property from request params
 * 
 * @param request - HTTP request. Contains year, rabies in params.
 * @param response - HTTP response. Responds with diseaseData based on year, rabies params and status code based on functionality of route.
 */
router.get("/year/:year/rabies/g/:rabies", async (req, res) => {
  try {
    const year = req.params.year;
    const rabies = req.params.rabies;
    const diseaseData = await getDiseaseRabiesG(year, rabies)
    res.status(200).send(diseaseData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all diseaseData based on year, rabies property from request params
 * 
 * @param request - HTTP request. Contains year, rabies in params.
 * @param response - HTTP response. Responds with diseaseData based on year, rabies params and status code based on functionality of route.
 */
router.get("/year/:year/rabies/l/:rabies", async (req, res) => {
  try {
    const year = req.params.year;
    const rabies = req.params.rabies;
    const diseaseData = await getDiseaseRabiesL(year, rabies);
    res.status(200).send(diseaseData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all diseaseData based on year, malaria property from request params
 * 
 * @param request - HTTP request. Contains year, malaria in params.
 * @param response - HTTP response. Responds with diseaseData based on year, malaria params and status code based on functionality of route.
 */
router.get("/year/:year/malaria/g/:malaria", async (req, res) => {
  try {
    const year = req.params.year;
    const malaria = req.params.malaria;
    const diseaseData = await getDiseaseMalariaG(year, malaria)
    res.status(200).send(diseaseData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all diseaseData based on year, malaria property from request params
 * 
 * @param request - HTTP request. Contains year, malaria in params.
 * @param response - HTTP response. Responds with diseaseData based on year, malaria params and status code based on functionality of route.
 */
router.get("/year/:year/malaria/l/:malaria", async (req, res) => {
  try {
    const year = req.params.year;
    const malaria = req.params.malaria;
    const diseaseData = await getDiseaseMalariaL(year, malaria);
    res.status(200).send(diseaseData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all diseaseData based on year, infection property from request params
 * 
 * @param request - HTTP request. Contains year, infection in params.
 * @param response - HTTP response. Responds with diseaseData based on year, infection params and status code based on functionality of route.
 */
router.get("/year/:year/infection/g/:infection", async (req, res) => {
  try {
    const year = req.params.year;
    const infection = req.params.infection;
    const diseaseData = await getDiseaseInfectionG(year, infection)
    res.status(200).send(diseaseData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all diseaseData based on year, infection property from request params
 * 
 * @param request - HTTP request. Contains year, infection in params.
 * @param response - HTTP response. Responds with diseaseData based on year, infection params and status code based on functionality of route.
 */
router.get("/year/:year/infection/l/:infection", async (req, res) => {
  try {
    const year = req.params.year;
    const infection = req.params.infection;
    const diseaseData = await getDiseaseInfectionL(year, infection);
    res.status(200).send(diseaseData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
