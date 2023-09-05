import User from "../models/User.js";
import jwt from "jsonwebtoken";

const loginService = ({ email }) => User.findOne({ email }).select("+password");

const generateToken = (auth) => {
  return jwt.sign(auth, process.env.SECRET_JWT, { expiresIn: 86400 });
};

const findIdService = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { loginService, generateToken, findIdService };
