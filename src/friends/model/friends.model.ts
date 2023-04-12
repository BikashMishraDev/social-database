import {Model} from 'mongoose';
import {  FriendType } from '../types';


type FriendModel = Model<FriendType>;
export {FriendModel} ;