const express = require('express');
const router = express.Router();

const petOwnerController = require("../controllers/petOwnerController");
const adminController = require("../controllers/adminController");



 router.post("/api/auth/signup/petowner", petOwnerController.signup);
 router.post("/api/auth/signin/petowner", petOwnerController.signin);

 router.post("/api/auth/signup/admin", adminController.signup);
 router.post("/api/auth/signin/admin", adminController.signin);


 module.exports = router;