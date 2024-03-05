const express = require('express');
const router = express.Router();

const petOwnerController = require("../controllers/petOwnerController");
const adminController = require("../controllers/adminController");
const petController = require("../controllers/petController");
const bookingController = require("../controllers/bookingController");
//const serviceController = require("../controllers/serviceController");

router.post("/api/auth/signup/petowner", petOwnerController.signup);
router.post("/api/auth/signin/petowner", petOwnerController.signin);
router.get("/api/auth/getPetOwner/:petOwnerId", petOwnerController.getPetOwner);
router.put("/api/auth/editProfile/petowner/:petOwnerId", petOwnerController.updateProfile);

router.post("/api/auth/signup/admin", adminController.signup);
router.post("/api/auth/signin/admin", adminController.signin);

router.get("/api/getPets/pet/:petOwnerId", petController.getAll);
router.post("/api/addPet/pet", petController.createPet);
router.get("/api/getPet/:petId", petController.getPet);
router.delete("/api/deletePet/:petOwnerId/:petId", petController.deletePet);

router.post("/api/createHomeCareBooking", bookingController.createHomeCareBooking);
router.post("/api/createErrandsCareBooking", bookingController.createErrandsCareBooking);
router.post("/api/createDayCareBooking", bookingController.createDayCareBooking);
router.get("/api/getBooking/:petOwnerId", bookingController.getBooking);
router.get("/api/getAllBookings", bookingController.getAllBookings);
router.put("/api/updateBooking/:bookingId", bookingController.updateBooking);
 
// router.post("/api/addService", serviceController.createService);
// router.get("/api/getService/:serviceId", serviceController.getService);
// router.put("/api/updateService/:serviceId", serviceController.updateService);
module.exports = router;