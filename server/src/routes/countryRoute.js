import { Router } from 'express';
import { getCountries, getCountry, insertCountry } from '../queries/countryQuery.js';

const router = Router();

router.get("/", async (req, res) => {
  try {
    const countries = await getCountries();
    res.status(200).send(countries);
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
});

router.get("/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const country = await getCountry(name);
    res.send(country);
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, population, populationChange } = req.body;
    const country = await insertCountry(name, population, populationChange);
    res.status(201).send(country);
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
});

export default router;
