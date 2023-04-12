import mongoose, { model, Schema } from 'mongoose';
import { UserType, } from '../types';
import { UserModel } from '../model';
const UserSchema = new mongoose.Schema<UserType, UserModel>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, required: true },
  //updated_at: { type: Date, default: Date.now }
});
const User = model<UserType, UserModel>('user', UserSchema);
export { User, UserSchema };
