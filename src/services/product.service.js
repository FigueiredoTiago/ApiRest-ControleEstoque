import Product from '../models/Product.js';


const createService = async (body) => Product.create(body);

const getAllService = async () => Product.find();

export { createService, getAllService };