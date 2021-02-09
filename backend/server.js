import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';

const app = express();

//apply middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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
app.use('/api/orders', orderRouter)

//to render static file inside build folder 
app.use('/', express.static(__dirname + '/frontend/build'));
app.get('*', (req, res) =>
  res.sendFile(__dirname + '/frontend/build/index.html')
);

// app.get('/', (req, res) => {
//   res.send('Server is running');
// });

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
  next();
});

// port
const port = process.env.PORT || 3300;
app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
