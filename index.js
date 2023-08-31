const express = require('express')
const app = express()
const port = 3000

//Rotas do Usuario
const userRoute = require('./src/routes/user.route');

app.use('/soma', userRoute);

app.listen(port, () => {
    console.log(`API listening on port: ${port}`);
})
