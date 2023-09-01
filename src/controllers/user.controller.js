//arquivo de controller usado para criar logica de negocio
import userService from '../services/user.service.js';

//controle para criar usuario 
const create = async (req, res) => {
    try {
        //criar usuario
        const user = await userService.createService(req.body);
        res.status(201).send({ message: "Seu Usuário foi criado com sucesso!" });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export default { create };