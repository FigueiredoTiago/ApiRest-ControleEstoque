import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { findIdService } from "../services/auth.service.js";

export const authMiddleware = async (req, res, next) => {
  try {
    //pegando o token do header
    const { authorization } = req.headers;
    //verificando se o token existe
    if (!authorization) {
      return res
        .status(401)
        .json({ message: "Acesso Negado, Efetue o Login para Continuar!" });
    }
    //separando o token do bearer
    const parts = authorization.split(" ");
    //separando o bearer do token
    const [schema, token] = parts;
    //verificando se o token tem duas partes
    if (parts.length !== 2) {
      return res.status(401).json({ message: "Token Invalido" });
    }
    //verificando se o bearer é o bearer mesmo
    if (schema !== "Bearer") {
      return res.status(401).json({ message: "Autorization Mal Formatada" });
    }
    //verificando se o token é valido
    jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Token Invalido ou Expirado!" });
      }

      const user = await findIdService(decoded.id);

      if (!user) {
        return res.status(404).json({ message: "Usuario não encontrado" });
      }

      req.userAuth = user.auth;

      return next();
    });
  } catch (error) {
    return res.status(500).json({ message: "Erro no Servidor" });
  }
};
