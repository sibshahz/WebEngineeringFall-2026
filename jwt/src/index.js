import express from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(cookieParser());
const SECRET_KEY = "this_is_our_super_secret_key";
const users = [];
const saltRounds = 7;

function middlewareAuth(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.status(401);
    res.send({
      error: "You are not authenticated",
    });
  }
  try {
    const verify = jwt.verify(token, SECRET_KEY);
    if (verify) {
      next();
    }
  } catch (error) {
    res.status(401).send({
      error: "You are not logged in.",
    });
  }
}

app.get("/", async (req, res) => {
  res.send("Welcome to jwt servers");
});

app.post("/register", (req, res) => {
  const { name, email, age, password } = req.body;
  const role = age >= 30 ? "admin" : "user";
  const user = {
    name: name,
    email: email,
    age: age,
    role: role,
  };
  bcrypt.hash(password, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    users.push({ ...user, password: hash });
    const token = jwt.sign(user, SECRET_KEY);
    res.cookie("user-role", role);
    res.cookie("token", token);
    res.send({
      message: "User registered successfully",
      success: true,
    });
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const foundUser = users[0];
  if (foundUser.email !== email) {
    res.send("User not found");
  }
  bcrypt.compare(password, foundUser.password, function (err, result) {
    if (result) {
      res.send("You are logged in successfully!");
    } else {
      res.send("Password is incorrect!!!");
    }
  });
});

app.get("/data", middlewareAuth, (req, res) => {
  res.send("DATA SENT");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/admin", middlewareAuth, (req, res) => {
  res.send("Admin operation completed successfully");
});
app.listen(PORT, () => {
  console.log(`JWT SERVER IS RUNNING ON PORT: ${PORT}`);
});
