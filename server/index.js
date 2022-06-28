const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dbURI = require("./db-credentials/db-credentials");
const PORT = process.env.PORT || 3001;

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "../client/build")));

// Connect to MongoDB
mongoose
  .connect(dbURI)
  .then((res) => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server listening on port:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
