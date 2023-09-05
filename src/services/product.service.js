import Product from '../models/Product.js';


const createService = async (body) => Product.create(body);

const getAllService = async ( limit, offset ) => Product.find().sort({ name: 1 }).skip(offset).limit(limit);

const countProductService = async () => Product.countDocuments();

export { createService, getAllService, countProductService};