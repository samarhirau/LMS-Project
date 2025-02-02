import express from 'express';
import cors from 'cors';
import cokkieParser from 'cookie-parser';
import {config} from 'dotenv';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js';
import courseRoutes from './models/course.model.js';
import errorMiddleware from './middlewares/error.middleware.js';
import morgan from 'morgan';
config();




const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors(
    {
        origin: [process.env.FRONTEND_URL],
        credentials: true
    }   
));


app.use(cokkieParser());

app.use(morgan('dev'));

app.use('/ping', (req, res) => {
    res.send('pong');
});

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/courses', courseRoutes);

app.all('*' , (req, res) => {
    res.status(404).send('OOPS! 404 Not Found');
    });

app.use(errorMiddleware);    

export default app;



