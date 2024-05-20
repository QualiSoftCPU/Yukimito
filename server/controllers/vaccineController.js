const db = require('../models');
const vaccine = db.Vaccine;


async function createVaccine(req, res) {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  try {
    const newVaccine = await vaccine.create({ name, description });
    res.status(201).send(newVaccine);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while creating the Vaccine."
    });
  }
}


async function updateVaccine(req, res) {
  const id = req.params.id;
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  try {
    const [updated] = await vaccine.update({ name, description }, {
      where: { id }
    });

    if (updated) {
      const updatedVaccine = await vaccine.findByPk(id);
      return res.status(200).send(updatedVaccine);
    }
    throw new Error('Vaccine not found');
  } catch (error) {
    res.status(500).send({
      message: error.message || `Error updating Vaccine with id=${id}`
    });
  }
}

async function deleteVaccine(req, res) {
  const id = req.params.id;

  try {
    const deleted = await vaccine.destroy({
      where: { id }
    });

    if (deleted) {
      return res.status(200).send({
        message: "Vaccine deleted successfully!"
      });
    }
    throw new Error('Vaccine not found');
  } catch (error) {
    res.status(500).send({
      message: error.message || `Could not delete Vaccine with id=${id}`
    });
  }
}
async function findVaccineById(req, res) {
    const id = req.params.id;
  
    try {
      const chosenVaccine = await vaccine.findByPk(id);
  
      if (chosenVaccine) {
        return res.status(200).send(chosenVaccine);
      }
      return res.status(404).send({
        message: `Vaccine with id=${id} not found`
      });
    } catch (error) {
      res.status(500).send({
        message: error.message || `Error retrieving Vaccine with id=${id}`
      });
    }
  }

  async function findAllVaccines(req, res) {
    try {
      const vaccines = await vaccine.findAll();
      if (vaccines.length === 0) {
        return res.status(404).send({ message: "No vaccines found" });
      }
      else {
        return res.status(200).send(vaccines);
      }

    } catch (error) {
      res.status(500).send({
        message: error.message || "Some error occurred while retrieving vaccines."
      });
    }
  }

module.exports = {
  createVaccine,
  updateVaccine,
  deleteVaccine,
  findVaccineById,
  findAllVaccines
};


