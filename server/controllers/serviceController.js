const db = require('../models');
const Service = db.service;

const createService = (req, res) => {
    Service.create({
        type: req.body.type,
        rate: req.body.rate,
    })
        .then(service => {
        res.send({ message: "Service was created successfully!" });
        })
        .catch(err => {
        res.status(500).send({ message: err.message });
        });
    }

const getService = (req, res) => {
    Service.findAll()
        .then(service => {
        res.send(service);
        })
        .catch(err => {
        res.status(500).send({ message: err.message });
        });
    }

const updateService = (req, res) => {
    Service.update({
        type: req.body.type,
        rate: req.body.rate,
    }, { where: { id: req.params.serviceId } })
        .then(num => {
        if (num == 1) {
            res.send({ message: "Service rate was updated successfully." });
        } else {
            res.send({ message: `Cannot update Service with id=${req.params.serviceId}. Maybe Service was not found or req.body is empty!` });
        }
        })
        .catch(err => {
        res.status(500).send({ message: err.message });
        });
    }

module.exports = {  createService, getService, updateService };