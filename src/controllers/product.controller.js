import {
  createService,
  getAllService,
  findByIdService,
  searchByNameService,
  updateService,
  deleteService,
} from "../services/product.service.js";

const create = async (req, res) => {
  try {
    const { name, price, description, amount } = req.body;

    if (!name || !price || !description || !amount) {
      return res.status(400).json({ message: "Preencha todos os Campos" });
    }

    if (req.userAuth !== "admin") {
      return res.status(401).json({ message: "Permissao Negada!" });
    }

    const newProduct = await createService({
      name,
      price,
      description,
      amount,
    });

    res.status(201).json({ message: "Produto criado com sucesso", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const products = await getAllService();

    if (products.length === 0) {
      return res.status(404).json({ message: "Nenhum produto cadastrado" });
    }

    res
      .status(200)
      .json({  results: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Informe o ID do produto" });
    }

    const product = await findByIdService(id);

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchByName = async (req, res) => {
  try {
    const { name } = req.query;

    const products = await searchByNameService(name);

    if (products.length === 0) {
      return res.status(404).json({ message: "Nenhum produto encontrado" });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, amount } = req.body;

    if (req.userAuth !== "admin") {
      return res.status(401).json({ message: "Permissao Negada!" });
    }

    if (!name && !price && !description && !amount) {
      return res
        .status(400)
        .json({ message: "Informe ao menos um campo para atualizar" });
    }

    const product = await findByIdService(id);

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    const productUpdated = await updateService(id, name, price, description, amount);

    res.status(200).json({ message: "Produto atualizado com sucesso", product: productUpdated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.userAuth !== "admin") {
      return res.status(401).json({ message: "Permissao Negada!" });
    }

    const product = await findByIdService(id);

    if (!product) {
      return res.status(404).json({ message: "Produto não encontrado" });
    }

    await deleteService(id);

    res.status(200).json({ message: "Produto deletado com sucesso" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { create, getAll, findById, searchByName, update, deleteProduct };
