const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
//Rotas do Usuario
const userRoute = require('./src/routes/user.route');
//Conexão com o banco de dados
const connectDatabase = require('./src/database/db');
connectDatabase();

//middlewares
const { userExists } = require('./src/middlewares/global.middlewares');

app.use('/user', userExists, userRoute);

app.listen(port, () => {
    console.log(`API listening on port: ${port}`);
});
