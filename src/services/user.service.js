//service e responsavel por fazer a comunicacao com o banco de dados
const User = require('../models/User');

const create = (body) => User.create(body);

module.exports = { create };