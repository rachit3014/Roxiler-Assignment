const express = require("express");
const router = express.Router();
const searchItem = require("../controllers/search");
const chartitem = require("../controllers/chart");
const initalize = require("../controllers/initalize");
const statistics = require("../controllers/statistics");
router.get("/", initalize.initalizeDatabase);  // routes for initalizing database
router.get("/transaction/", searchItem.searchitem); //routes for search item 
router.get("/statics/", statistics.Statistics); // routes for statics
router.get("/chart/", chartitem.barchat); // routes for barchart
router.get('/piechart/',chartitem.piechart); // routes for piechart

module.exports = router;
