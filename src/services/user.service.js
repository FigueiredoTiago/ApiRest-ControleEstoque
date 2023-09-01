//service e responsavel por fazer a comunicacao com o banco de dados
const User = require('../models/User');

const createService = (body) => User.create(body);

const getOneService = ({email}) => User.findOne( {email} );

module.exports = { createService, getOneService};