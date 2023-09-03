import { createService, getAllService } from "../services/product.service.js";

const create = async (req, res) => {
  try {
    const { name, price, description, amount } = req.body;
    if (!name || !price || !description || !amount) {
      return res.status(400).json({ message: "Preencha todos os Campos" });
    }
    await createService({
        name,
        price,
        description,
        amount,
        id_user: 'Id_example',
    });
    res.status(201).json({ message: "Produto criado com sucesso" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  const product = {};
};

export { create, getAll };