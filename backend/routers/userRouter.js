import express from 'express';
import data from '../data.js';
import User from '../models/User.js';

const userRouter = express.Router();

userRouter.get('/hyperproject', async (req, res) => {
  try {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  } finally {
    console.log('We do cleanup here');
   // await User.remove({});
  }
  return 'Nothing found';
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
