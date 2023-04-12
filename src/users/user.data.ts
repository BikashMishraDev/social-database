import { Common } from '../common';
import {User} from './schema';
// import {UserModel }from '../users/model';

// import { UserType } from './types';

// const createUser = async (user: UserType) => {
//   const newUser = new UserModel(user);
//   const connection = await Common.Mongo.getConnection();
//   return newUser.save();
// };

const getUsers = async () => {
  const connection = await Common.Mongo.getConnection();
  return await User.find();
};

export const UserData = {
  getUsers,
  // createUser
};