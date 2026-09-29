const express = require("express");
const app = express();

// middleware for json
app.use(express.json());

const port = 3000;

const patients = [];

app.get("/", (req, res) => {
  res.send("Welcome to the general hospital of haripur!");
});

app.get("/ortho", (req, res) => {
  res.send(
    "Welcome to the orthopedics department of general hospital haripur!",
  );
});
app.post("/ortho", (req, res) => {
  const { name, age, bone } = req.body;
  patients.push({
    id: Math.random(1, 25000),
    name: name,
    age: age,
    bone: bone,
  });
  res.send("Request recieved for post");
});

app.get("/patients", (req, res) => {
  res.send({
    patients: patients,
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
