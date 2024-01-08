const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const Admin = db.admin;

const signup = (req, res) => {

 Admin.create({
   username: req.body.username,
   password: bcrypt.hashSync(req.body.password, 8),
 })
   .then(admin => {
     res.send({ message: "Admin was registered successfully!" });
   })
   .catch(err => {
     res.status(500).send({ message: err.message });
   });
};

const signin = (req, res) => {
 Admin.findOne({
   where: {
     username: req.body.username
   }
 })
   .then(admin => {
     if (!admin) {
       return res.status(404).send({ message: "Admin Not found." });
     }

     var passwordIsValid = bcrypt.compareSync(
       req.body.password,
       admin.password
     );

     if (!passwordIsValid) {
       return res.status(401).send({
         accessToken: null,
         message: "Invalid Password!"
       });
     }

     var token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
       expiresIn: 86400 // 24 hours
     });

     res.status(200).send({
       id: admin.id,
       username: admin.username,
       accessToken: token
     });
   })
   .catch(err => {
     res.status(500).send({ message: err.message });
   });
};


module.exports = { signup, signin};