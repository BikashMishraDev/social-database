import { Model } from 'mongoose';
import {  UserType } from '../types';


type UserModel = Model<UserType>;
export {UserModel};
