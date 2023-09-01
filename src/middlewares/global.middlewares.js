const mongoose = require('mongoose');
const userService = require('../services/user.service');


const userExists = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        //validacoes
        if (!name || !email || !password) {
            res.status(400).send({ message: "Dados obrigatórios não foram informados!" });
        }

        const userExists = await userService.getOneService({ email });

        if (userExists) {
            return res.status(400).json({ message: 'Email já cadastrado!' });
        }

        next();
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = { userExists };