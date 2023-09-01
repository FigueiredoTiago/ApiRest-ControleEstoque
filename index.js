import express from 'express';
const app = express()
const port = 3000
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
