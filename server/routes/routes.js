const express = require('express');
const router = express.Router();

const petOwnerController = require("../controllers/petOwnerController");
const adminController = require("../controllers/adminController");
const petController = require("../controllers/petController");

router.post("/api/auth/signup/petowner", petOwnerController.signup);
router.post("/api/auth/signin/petowner", petOwnerController.signin);

router.post("/api/auth/signup/admin", adminController.signup);
router.post("/api/auth/signin/admin", adminController.signin);

router.get("/api/getPets/pet", petController.getAll);
router.post("/api/addPet/pet", petController.createPet);

 module.exports = router;