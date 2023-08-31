//arquivo controller, responsavel por fazer a logica da rota

const soma = (req, res) => {
    const soma = 100 + 100;

    res.send({ soma: soma });
};

module.exports = { soma };