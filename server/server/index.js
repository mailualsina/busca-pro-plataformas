const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const clientBuildPath = path.join(__dirname, "../../buscapro/build");
app.use(express.static(clientBuildPath));

// Create MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lu21n39a",
  database: "buscapro"
});


db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

// Login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM user WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length > 0) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

// Register endpoint
app.post("/api/register", (req, res) => {
  const { username, password, fullname, lastname, email, phone, professionalValue } = req.body;
  const query = "INSERT INTO user (username, password, name, last_name, email, contact_number, professional) VALUES (?,?,?,?,?,?,?)";
  db.query(query, [username, password, fullname, lastname, email, phone, professionalValue], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ success: false, message: "El nombre de usuario ya esta en uso" });
      }
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ success: true });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
