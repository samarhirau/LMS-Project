const express = require('express');
const cors = require('cors');
const cokkieParser = require('cookie-parser');
const {config} = require('dotenv');
config();




const app = express();



app.use(express.json());

app.use(cors(
    {
        origin: [process.env.CORS_ORIGIN],
        credentials: true
    }   
));


app.use(cokkieParser());

app.use('/ping', (req, res) => {
    res.send('pong');
});

// rouotes od 3 modules

app.all('*' , (req, res) => {
    res.status(404).send('OOPS! 404 Not Found');
    });

module.exports = app;



