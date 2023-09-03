//service e responsavel por fazer a comunicacao com o banco de dados
import User from '../models/User.js';

const createService = (body) => User.create(body);

const getOneService = ({ email }) => User.findOne({ email });

const loginService = ({email}) => User.findOne({email}).select('+password');

export default { createService, getOneService, loginService };