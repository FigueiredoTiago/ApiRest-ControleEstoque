import service from '../services/user.service.js';

import bcryt from 'bcrypt';

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await service.loginService({ email });

        if (!user) {
            return res.status(404).json({ message: 'Usuario não encontrado' });
        }

        const passwordIsValid = bcryt.compareSync(password, user.password);

        if (!passwordIsValid) {
            return res.status(401).json({ message: 'Senha Invalida' });
        }

        return res.status(200).json({ message: 'Login Efetuado com Sucesso' });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default { login };