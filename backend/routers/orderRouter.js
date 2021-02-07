import express from 'express';
import Order from '../models/Order.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.get('/mine', isAuth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

orderRouter.post('/', isAuth, async (req, res) => {
  try {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: 'Cart cannot be empty' });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: 'New Order Created', order: createdOrder });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

orderRouter.get('/:id', isAuth, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default orderRouter;
