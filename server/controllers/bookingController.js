const db = require('../models');
const Booking = db.booking;

const createBooking = (req, res) => {
    let totalPrice = 0;;

    Booking.create({
        petOwnerId: req.body.petOwnerId,
        pets: req.body.pets,
        checkIn_date: new Date(req.body.checkIn_date),
        checkOut_date: new Date(req.body.checkOut_date),
        total_price: req.body.service_list.forEach(service => { totalPrice += service.rate }),
        status: req.body.status,
        service_list: req.body.service_list
    })
        .then(booking => {
        res.send({ message: "Booking was created successfully!" });
        })
        .catch(err => {
        res.status(500).send({ message: err.message });
        });
    }

const getBooking = (req, res) => {
    Booking.findAll({ where: { petOwnerId: req.params.petOwnerId } })
        .then(booking => {
        res.send(booking);
        })     
        .catch(err => {
        res.status(500).send({ message: err.message });
        });
    }

const updateBooking = (req, res) => {
    Booking.update({
        status: req.body.status,
    }, { where: { id: req.params.bookingId } })
        .then(num => {
        if (num == 1) {
            res.send({ message: "Booking status was updated successfully." });
        } else {
            res.send({ message: `Cannot update Booking with id=${req.params.bookingId}. Maybe Booking was not found or req.body is empty!` });
        }
        })
        .catch(err => {
        res.status(500).send({ message: err.message });
        });
    } 

module.exports = {  createBooking, getBooking, updateBooking };
