import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express()
const port = process.env.PORT || 3000;
app.use(express.json());
import cors from 'cors';
app.use(cors());
//Rotas do Usuario
import userRoute from './src/routes/user.route.js';
import authRoute from './src/routes/auth.route.js';
//rotas do produto
import productRoute from './src/routes/product.route.js';
//Conexão com o banco de dados
import connectDatabase from './src/database/db.js';
connectDatabase();

//rotas
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute);



app.listen(port, () => {
    console.log(`API listening on port: ${port}`);
});
