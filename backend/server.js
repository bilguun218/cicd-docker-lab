const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const APP_NAME = process.env.APP_NAME || "CI/CD Docker Backend";

app.get("/", (req, res) => {
  res.json({
    message: "CI/CD pipeline ашигласан Docker backend ажиллаж байна",
    app: APP_NAME,
    port: PORT
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    service: "Node.js Express API",
    pipeline: "GitHub Actions + Docker"
  });
});

app.listen(PORT, () => {
  console.log(`${APP_NAME} server running on port ${PORT}`);
});
