const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors())

app.get("/api/v1/details", (req, res) => {
  res.status(200).json({
    email: "enikuauth@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/eniiku/hng12-task-stage-0.git",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
