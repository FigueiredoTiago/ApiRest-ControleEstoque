import Product from "../models/Product.js";

const createService = async (body) => Product.create(body);

const getAllService = async (limit, offset) =>
  Product.find().sort({ name: 1 }).skip(offset).limit(limit);

const countProductService = async () => Product.countDocuments();

const findByIdService = async (id) => Product.findById(id);

const searchByNameService = async (name) =>
  Product.find({ name: { $regex: `${name || ""}`, $options: "i" } }).sort({
    name: 1,
  });

const updateService = async (id, name, price, description, amount) =>
  Product.findOneAndUpdate(
    { _id: id },
    { name, price, description, amount },
    { rawResult: true }
  );

export {
  createService,
  getAllService,
  countProductService,
  findByIdService,
  searchByNameService,
  updateService,
};
