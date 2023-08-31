//arquivo controller, responsavel por fazer a logica da rota dos usuarios
const userService = require('../services/user.service');

//controle para criar usuario
const create = async (req, res) => {
    const { name, email, password } = req.body;
    //validacoes
    if (!name || !email || !password) {
        res.status(400).send({ message: "Dados obrigatórios não foram informados!" });
    }

    //criar usuario
    const user = await userService.create(req.body);

    //validacao antes de criar usuario
    if (!user) {
        return res.status(400).send({ message: "Erro ao cadastrar usuário!" });
    }


    res.status(201).send({ message: "Seu Usuário foi criado com sucesso!" });
};

module.exports = { create };