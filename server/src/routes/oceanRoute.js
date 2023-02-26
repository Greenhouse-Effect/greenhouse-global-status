import { Router } from 'express';
import { getOceans, getOcean, insertOcean } from '../queries/oceanQuery.js';

const router = Router();

/**
 * Route creates a new ocean with properties from request body and stores it into db
 * 
 * @param request - HTTP request. Contains name in body.
 * @param response - HTTP response. Responds with posted ocean and status code based on functionality of route.
 */
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const ocean = await insertOcean(name);
    res.status(201).send(ocean);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets all oceans from db
 * 
 * @param request - HTTP request.
 * @param response - HTTP response. Responds with all oceans and status code based on functionality of route.
 */
router.get("/", async (req, res) => {
  try {
    const oceans = await getOceans();
    res.status(200).send(oceans);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Route gets one ocean based on name property from request params
 * 
 * @param request - HTTP request. Contains name in params.
 * @param response - HTTP response. Responds with one ocean and status code based on functionality of route.
 */
router.get("/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const ocean = await getOcean(name);
    res.status(200).send(ocean);
  } catch(err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
