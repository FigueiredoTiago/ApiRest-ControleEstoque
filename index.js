import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express()
const port = process.env.PORT || 3000;
app.use(express.json());
//Rotas do Usuario
import userRoute from './src/routes/user.route.js';
//Conexão com o banco de dados
import connectDatabase from './src/database/db.js';
connectDatabase();


app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`API listening on port: ${port}`);
});
