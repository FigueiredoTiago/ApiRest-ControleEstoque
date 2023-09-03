import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  updated: {
    type: Date,
    default: Date.now(),
  },
  id_user: {
    type: String,
    required: true,
  }, //apagar ou editar dps
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
