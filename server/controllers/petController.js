const db = require('../models');
const Pet = db.pet;

async function getAll(req, res)  {
  const userId = req.params.petOwnerId;

  console.log(userId);
  
  const pets = await Pet.findAll({
    where: {
      petOwnerId: userId
    }
  });

  res.json(pets);
};

async function getPet(req, res) {
  const petId = req.params.petId;

  try {
    const pet = await Pet.findByPk(petId);
    res.json(pet);
  } catch (error) {
    res.status(404).json({ message: 'Pet not found' });
  }
}


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

module.exports = { getAll, createPet, getPet};