const express = require('express');
const router = express.Router();
const UserController = require("./controllers/UserControllers");
const AddressController = require("./controllers/AddressController");
router.get("/", (req, res)=>{
    res.json("xd");
});
//ruta usuario
router.get("/x", UserController.all);
//ruta direeciones
router.get("/address", AddressController.all);
module.exports = router;