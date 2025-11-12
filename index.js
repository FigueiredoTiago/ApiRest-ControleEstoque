import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express()
const port = process.env.PORT || 3000;
import cors from 'cors';

const allowedOrigins = [
    'https://easyestoque.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173' // adicione também para Vite/dev
];

const corsOptions = {
    origin: function (origin, callback) {
        // Permitir requests sem origin (como mobile apps ou curl)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log('Blocked by CORS:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

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
