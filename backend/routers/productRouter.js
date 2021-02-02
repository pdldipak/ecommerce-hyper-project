import express from 'express';
import data from '../data.js';
import Product from '../models/Product.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
});

productRouter.get('/hyperproject', async (req, res) => {
  try {
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  } catch (error) {
    //console.error(error);
    res.status(500).send({ message: error.message });
  } finally {
    //console.log('We do cleanup here');
    // await Product.remove({});
  }
  return 'Nothing found';
});

productRouter.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default productRouter;
