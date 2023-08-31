const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

//Rotas do Usuario
const userRoute = require('./src/routes/user.route');

app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`API listening on port: ${port}`);
});
