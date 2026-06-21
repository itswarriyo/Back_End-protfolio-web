let express = require("express");
const { enqueryInsert } = require("../Controller/protfolio.Controller");


let enqueryroute = express.Router();

enqueryroute.post("/insert", enqueryInsert );

module.exports = enqueryroute;


