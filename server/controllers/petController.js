const db = require('../models');
const Pet = db.pet;
const initializeApp = require('firebase/app').initializeApp
const getStorage = require('firebase/storage').getStorage;
const getDownloadURL = require('firebase/storage').getDownloadURL;
const uploadBytesResumable = require('firebase/storage').uploadBytesResumable;
const ref = require('firebase/storage').ref;
const config = require('../config/firebase.config');

initializeApp(config);

const storage = getStorage();

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

const createPet = async (req, res) => {
  try {
    const { name, breed, birthday, size, petOwnerId } = req.body;

    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded for vaccinePhoto' });
    }

    console.log(req.file);

    // Upload file to Firebase Storage
    const dateTime = giveCurrentDateTime();
    const storageRef = ref(storage, `files/${req.file.originalname + "     " + dateTime}`)
    const metadata = {
      contentType: req.file.mimetype,
    };
    const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata); // Wait for the upload to complete
    const downloadURL = await getDownloadURL(snapshot.ref); // Wait for the URL retrieval

    console.log(downloadURL);
    // Create pet record in the database
    const pet = await Pet.create({
      name: name,
      breed: breed,
      birthday: birthday,
      size: size,
      petOwnerId: petOwnerId,
      vaccinePhoto: downloadURL, // Save the download URL to the vaccinePhoto field
    });

    res.status(200).json(pet); // Respond with the created pet record
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Internal server error' });
  }
};



async function deletePet(req, res) {
  const petId = req.params.petId;
  const userId = req.params.petOwnerId;

  try {
    const pet = await Pet.findOne({
      where: {
        id: petId,
        petOwnerId: userId
      }
    });

    if (!pet) {
      return res.status(404).json({ message: 'Pet not found for the specified user' });
    }

    await pet.destroy();
    res.json({ message: 'Pet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

const giveCurrentDateTime = () => {
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + ' ' + time;

  return dateTime
};

module.exports = { getAll, createPet, getPet, deletePet};