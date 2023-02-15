require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log("Database connected")
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM Testers";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  })
});

app.post("/api/insert/country", (req, res) => {
  const countryName = req.body.countryName;
  const countryContinentName = req.body.countryContinentName;
  const countryPopulation = req.body.countryPopulation;
  const countryReportId = req.body.countryReportId;

  const sqlInsert = "INSERT INTO Country (countryName, countryContinentName, countryPopulation, countryReportId) VALUES (?,?,?,?)";
  db.query(sqlInsert, [countryName, countryContinentName, countryPopulation, countryReportId], (err, result) => {
    console.log(err);
  });
});

const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
