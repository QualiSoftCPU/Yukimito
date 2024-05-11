'use strict';
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const PetOwner = db.PetOwner;
const { check, validationResult } = require("express-validator");

const signup = async (req, res) => {
  try {
    const existingUser = await PetOwner.findOne({ where: { username: req.body.username } });

    if (existingUser) {
      return res.status(400).json({ errors: [{ field: "username", message: "Username is already taken" }] });
    }

    const passwordHash = await bcrypt.hash(req.body.password, 8);
     await PetOwner.create({
      name: req.body.name,
      contactNumber: req.body.contactNumber,
      username: req.body.username,
      password: passwordHash,
      emailAddress: req.body.emailAddress,
      address: req.body.address
    });

    res.send({ message: "Pet Owner was registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const signin = (req, res) => {
  PetOwner.findOne({
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

    let token = jwt.sign({ 
     owner_id: petOwner.owner_id,
     name: petOwner.name,
     username: petOwner.username,
     contact_number: petOwner.contactNumber,
     email: petOwner.emailAddress }, 
     process.env.JWT_SECRET, {
      expiresIn: 86400 // 24 hours
    });

    res.status(200).send({
     owner_id: petOwner.owner_id,
     name: petOwner.name,
     username: petOwner.username,
     contact_number: petOwner.contactNumber,
     email: petOwner.emailAddress,
      accessToken: token
    });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

const getPetOwner = (req, res) => {
  const userId = req.params.owner_id;

  PetOwner.findOne({
    where: {
      owner_id: userId
    }
  })
  .then(user => {
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    res.status(200).send(user);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  });
};

const updateProfile = (req, res) => {
  const ownerId = req.params.owner_id; 

  const updatedProfile = {
    name: req.body.ownerName,
    contactNumber: req.body.contactNumber,
    emailAddress: req.body.emailAddress,
    username: req.body.username,
    address: req.body.address
  };

  PetOwner.update(updatedProfile, {
    where: { owner_id: ownerId }
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
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  });
};

module.exports = { signup, signin, getPetOwner, updateProfile };
