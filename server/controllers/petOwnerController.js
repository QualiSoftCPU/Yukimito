const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const petOwner = db.petOwner;

const getAll = () => {
  petOwner.findOne({
    where: {
      username: req.body.username
    }
  })
} 

const signup = (req, res) => {

 petOwner.create({
   username: req.body.username,
   name: req.body.ownerName,
   contact_number: req.body.contactNumber,
   email: req.body.email,
   password: bcrypt.hashSync(req.body.password, 8),
 })
   .then(petOwner => {
     res.send({ message: "Pet Owner was registered successfully!" });
   })
   .catch(err => {
     res.status(500).send({ message: err.message });
   });
};

const signin = (req, res) => {
 petOwner.findOne({
   where: {
     username: req.body.username
   }
 })
   .then(petOwner => {
     if (!petOwner) {
       return res.status(404).send({ message: "Pet Owner Not found." });
     }

     var passwordIsValid = bcrypt.compareSync(
       req.body.password,
       petOwner.password
     );

     if (!passwordIsValid) {
       return res.status(401).send({
         accessToken: null,
         message: "Invalid Password!"
       });
     }

     var token = jwt.sign({ 
      id: petOwner.id,
      name: petOwner.name,
      username: petOwner.username,
      contact_number: petOwner.contact_number,
      email: petOwner.email }, 
      process.env.JWT_SECRET, {
       expiresIn: 86400 // 24 hours
     });

     res.status(200).send({
       id: petOwner.id,
       name: petOwner.ownerName,
       username: petOwner.username,
       contact_number: petOwner.contactNumber,
       email: petOwner.email,
       accessToken: token
     });
   })
   .catch(err => {
     res.status(500).send({ message: err.message });
   });
};


module.exports = { signup, signin};