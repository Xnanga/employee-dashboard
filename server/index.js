const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/employeeRoutes');
const dbURI = require('./db-credentials/db-credentials');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(routes);

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "../client/build")));

// Connect to MongoDB
mongoose
  .connect(dbURI)
  .then((res) => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server listening on port:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
