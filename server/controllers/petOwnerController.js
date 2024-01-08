const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const petOwner = db.petOwner;

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

const getPetOwner = (req, res) => {

  const userId = req.params.petOwnerId;

  db.petOwner.findOne({
    where: {
      id: userId
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }

      // Return the retrieved user data as a response
      res.status(200).send(user);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

const updateProfile = (req, res) => {

  const ownerId = req.params.petOwnerId; 

  const updatedProfile = {
    name: req.body.ownerName,
    contact_number: req.body.contactNumber,
    email: req.body.email,
    username: req.body.username
  };

  petOwner.update(updatedProfile, {
    where: { id: ownerId }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Profile was updated successfully." });
        console.log(updatedProfile);
      } else {
        res.send({ message: `Cannot update Profile with id=${ownerId}. Maybe Profile was not found or req.body is empty!` });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error updating Profile with id=" + ownerId });
    });
};

module.exports = { signup, signin, getPetOwner, updateProfile};