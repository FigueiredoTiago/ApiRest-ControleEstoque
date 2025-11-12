import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express()
const port = process.env.PORT || 3000;
app.use(express.json());
import cors from 'cors';
const allowedOrigins = [
    'https://easyestoque.vercel.app',
    'http://localhost:3000'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
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
