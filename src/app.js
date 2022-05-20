

const path = require("path");

const express = require("express");
const logger = require("morgan");
const bodyparser = require("body-parser");

const app = express();

const indexRoutes = require("./routes/index");