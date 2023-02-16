import { Router } from 'express';

import { db } from '../index.js'

const router = Router();

// TODO: Create post route that inserts passed values into COUNTRY table
router.post('/', async (req, res) => {
  const sqlInsertCountry = "INSERT INTO COUNTRY (countryName, countryPopulation) VALUES ('USA', 15)";
  db.query(sqlInsertCountry, (err, result) => {
    if (err) res.send(err.message).status(500);
    res.send(result).status(200);
  });
});


router.get('/', async (req, res) => {
  const sqlGetCountry = "SELECT * FROM COUNTRY";
  db.query(sqlGetCountry, (err, result) => {
    if (err) res.send(err.message).status(500);
    res.send(result).status(200);
  })
});

export default router;