import {
  createService,
  getAllService,
  countProductService,
  findByIdService,
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

    await createService({
      name,
      price,
      description,
      amount,
    });

    res.status(201).json({ message: "Produto criado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  let { limit, offset } = req.query;

  try {
    limit = Number(limit);
    offset = Number(offset);

    if (!limit) {
      limit = 5;
    }

    if (!offset) {
      offset = 0;
    }

    const products = await getAllService(limit, offset);

    const total = await countProductService();

    const currentUrl = req.baseUrl;

    const next = offset + limit;

    const nextUrl =
      next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    const previous = offset - limit < 0 ? null : offset - limit;

    const previousUrl =
      previous != null
        ? `${currentUrl}?limit=${limit}&offset=${previous}`
        : null;

    if (products.length === 0) {
      return res.status(404).json({ message: "Nenhum produto cadastrado" });
    }

    res
      .status(200)
      .json({ nextUrl, previousUrl, limit, offset, total, results: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findById = async (req, res) => {
  const { id } = req.params;

  try {
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

export { create, getAll, findById };
