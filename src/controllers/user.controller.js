//arquivo controller, responsavel por fazer a logica da rota dos usuarios


//controle para criar usuario
const create = (req, res) => {
    const { name, email, password } = req.body;

    //validacoes
    if (!name || !email || !password) {
        res.status(400).send({ message: "Dados obrigatórios não foram informados!" });
    }

    res.status(201).send({ message: "Usuário criado com sucesso!"});
};

module.exports = { create };