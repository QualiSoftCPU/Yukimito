const db = require('../models');
const Pet = db.Pet;

const getAll = (req, res) => {
  Pet.findAll()
    .then(pets => {
      res.status(200).json(pets);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};

const createPet = (req, res) => {
  Pet.create({
    name: req.body.name,
    breed: req.body.breed,
    birthday: req.body.birthday,
    size: req.body.size,
    petOwnerId: req.body.petOwnerId
  })
    .then(pet => {
      res.status(200).json(pet);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};

module.exports = { getAll, createPet };