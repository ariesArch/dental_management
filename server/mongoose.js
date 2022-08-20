
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();
require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log(uri)
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const memberRouter = require('./routes/member');

app.use('/members', memberRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});