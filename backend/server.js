import express from 'express';
import mongoose from 'mongoose';
import  bodyParser from 'body-parser';
import cors from 'cors'; 
import dotenv from 'dotenv';
dotenv.config();

import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';


const app = express();

//apply middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '2mb' }));
app.use(cors());

//connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URL || process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB CONNECTED'))
  .catch((err) => console.log('DB CONNECTION ERR', err));


//routing 
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// port
const port = process.env.PORT || 3300;
app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
