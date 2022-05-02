const express = require('express');
const app = express();
const dotenv = require('dotenv');

const productRoute = require('./routers/productRoute');

dotenv.config();
app.use(express.urlencoded());

app.use(productRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server is running at ${PORT}`));
