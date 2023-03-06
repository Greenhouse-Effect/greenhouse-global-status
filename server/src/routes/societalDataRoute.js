import { Router } from "express";

import { insertSocietalData,
getSocietalData,
getSocietalHdiG,
getSocietalHdiL,
getSocietalGniG,
getSocietalGniL } from "../queries/societalDataQuery.js";

const router = Router();

/**
 * Route creates a new societalData based on countryName, year with properties from request body and stores it into db
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with posted societalData and status code based on functionality of route.
 */
router.post("/:countryName/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const { hdi, gni } = req.body;
    const societalData = await insertSocietalData(countryName, year, hdi, gni);
    res.status(201).send(societalData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets one societalData based on countryName, year property from request params
 * 
 * @param request - HTTP request. Contains countryName, year in params.
 * @param response - HTTP response. Responds with societalData based on countryName, year params and status code based on functionality of route.
 */
router.get("/name/:countryName/year/:year", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    const year = req.params.year;
    const societalData = await getSocietalData(countryName, year);
    res.status(200).send(societalData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all societalData based on year, hdi property from request params
 * 
 * @param request - HTTP request. Contains year, hdi in params.
 * @param response - HTTP response. Responds with societalData based on year, hdi params and status code based on functionality of route.
 */
router.get("/year/:year/hdi/g/:hdi", async (req, res) => {
  try {
    const year = req.params.year;
    const hdi = req.params.hdi;
    const societalData = await getSocietalHdiG(year, hdi);
    res.status(200).send(societalData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all societalData based on year, hdi property from request params
 * 
 * @param request - HTTP request. Contains year, hdi in params.
 * @param response - HTTP response. Responds with societalData based on year, hdi params and status code based on functionality of route.
 */
router.get("/year/:year/hdi/l/:hdi", async (req, res) => {
  try {
    const year = req.params.year;
    const hdi = req.params.hdi;
    const societalData = await getSocietalHdiL(year, hdi);
    res.status(200).send(societalData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all societalData based on year, gni property from request params
 * 
 * @param request - HTTP request. Contains year, gni in params.
 * @param response - HTTP response. Responds with societalData based on year, gni params and status code based on functionality of route.
 */
router.get("/year/:year/gni/g/:gni", async (req, res) => {
  try {
    const year = req.params.year;
    const gni = req.params.gni;
    const societalData = await getSocietalGniG(year, gni);
    res.status(200).send(societalData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all societalData based on year, gni property from request params
 * 
 * @param request - HTTP request. Contains year, gni in params.
 * @param response - HTTP response. Responds with societalData based on year, gni params and status code based on functionality of route.
 */
router.get("/year/:year/gni/l/:gni", async (req, res) => {
  try {
    const year = req.params.year;
    const gni = req.params.gni;
    const societalData = await getSocietalGniL(year, gni);
    res.status(200).send(societalData);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
