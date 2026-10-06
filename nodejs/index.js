const express = require("express");
const app = express();

// middleware for json
app.use(express.json());

const port = 3000;

const patients = [
  {
    id: 3079015767150848,
    name: "Ahmed",
    age: 12,
    bone: "Right wrist",
  },
  {
    id: 3079015767150849,
    name: "Ali",
    age: 15,
    bone: "Left wrist",
  },
];

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

app.get("/blocking", (req, res) => {
  const start = Date.now();
  console.log("Blocking code started");
  while (Date.now() - start < 10000) {
    // blocking code for 10 seconds
  }
  res.send("Blocking code executed for 10 seconds");
});

app.get("/non-blocking", async (req, res) => {
  const ourPromise = new Promise((resolve, reject) => {
    setInterval(() => {
      resolve("Promise was resolved");
    }, 10000);
  });

  ourPromise.then(() => {
    res.send("Promise was resolved");
  });
  console.log("PROMISE WAS CALLED");
});

app.get("/patients/:id", (req, res) => {
  const patient = patients.find((p) => p.id == req.params.id);
  if (!patient) {
    res.status(404).send("Patient not found");
  } else {
    res.send(patient);
  }
});

app.put("/patients/:id", (req, res) => {
  const patient = patients.find((p) => p.id == req.params.id);
  if (!patient) {
    res.status(404).send("Patient not found");
  } else {
    const { name, age, bone } = req.body;
    patient.name = name;
    patient.age = age;
    patient.bone = bone;
    res.send(patient);
  }
});

app.delete("/patients/:id", (req, res) => {
  const patientIndex = patients.findIndex((p) => p.id == req.params.id);
  if (patientIndex === -1) {
    res.status(404).send("Patient not found");
  } else {
    patients.splice(patientIndex, 1);
    res.send("Patient deleted");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
