const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const routes = express.Router();

const BoxController = require("./controllers/BoxController");
//const FileController = require("./controllers/FileController");

//GET=buscar/POST=criar/PUT=editar/DELETE=deletar

routes.post("/boxes", BoxController.store);
//routes.post("/files", multer(multerConfig).single("File"), FileController.store);

module.exports = routes;
