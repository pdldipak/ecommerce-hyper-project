import express from 'express';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import User from '../models/User.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/hyperproject', async (req, res) => {
  try {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  } catch (error) {
    res.status(500).send({ message: error.message });
  } finally {
    console.log('We do cleanup here');
    // await User.remove({});
  }
  return 'Nothing found';
});

userRouter.post('/signin', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    } else {
      res.status(401).send({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

userRouter.post('/register', async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default userRouter;

// import expressAsyncHandler from 'express-async-handler'
// userRouter.get(
//   '/userinfo',
//   expressAsyncHandler(async (req, res) => {
//     // await User.remove({});
//     const createdUsers = await User.insertMany(data.users);
//     res.send({ createdUsers });
//   })
// );

// export default userRouter;
