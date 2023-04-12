import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4} from 'uuid';
import { FriendType } from '../types';
import { FriendModel } from '../model';

const FriendSchema: Schema = new mongoose.Schema<FriendType, FriendModel>({
    _id : { type: String, default: uuidv4 },
    user_id: { type: String, required: true },
    friend_id: { type: String, required: true },
    request:{type: String, required: true ,default:'pending',enum:['accept','pending','reject']},
    
    //updated_at: { type: Date, default: Date.now }
  });
  const FriendModel = mongoose.model<FriendType>('friends', FriendSchema);
  export {FriendSchema,FriendModel} ;