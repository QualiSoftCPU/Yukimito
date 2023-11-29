const db = require('../models');
const Pet = db.pet;

async function getAll(req, res)  {
  const userId = req.body.petOwnerId;

  const pets = await Pet.findAll({
    where: {
      petOwnerId: userId
    }
  });

  res.json(pets);
};


const createPet = (req, res) => {

  const { name, breed, birthday, size, petOwnerId } = req.body;

  Pet.create({
    name: name,
    breed: breed,
    birthday: birthday,
    size: size,
    petOwnerId: petOwnerId
  })
    .then(pet => {
      res.status(200).json(pet);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};

module.exports = { getAll, createPet };