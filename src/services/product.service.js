import Product from "../models/Product.js";

const createService = async (body) => {
  try {
    const newProduct = await Product.create(body);
    return newProduct;
  } catch (error) {
    throw new Error(`Erro ao criar o produto: ${error.message}`);
  }
}

const getAllService = async (limit, offset) =>
  Product.find()
    .collation({ locale: "en_US", strength: 2 })
    .sort({ name: 1 })
    .skip(offset)
    .limit(limit);

const countProductService = async () => Product.countDocuments();

const findByIdService = async (id) => Product.findById(id);

const searchByNameService = async (name) =>
  Product.find({ name: { $regex: `${name || ""}`, $options: "i" } }).sort({
    name: 1,
  });

const updateService = async (id, name, price, description, amount) =>
  Product.findOneAndUpdate(
    { _id: id },
    { name, price, description, amount, updated: Date.now() },
    { new: true },
  );

const deleteService = async (id) => Product.findOneAndDelete({ _id: id });

export {
  createService,
  getAllService,
  countProductService,
  findByIdService,
  searchByNameService,
  updateService,
  deleteService,
};
