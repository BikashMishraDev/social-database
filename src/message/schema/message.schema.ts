import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4} from 'uuid';
import { MessageType } from '../types';
import { MessageModel } from '../model';

const MessageSchema: Schema = new mongoose.Schema<MessageType, MessageModel>({
    _id : { type: String, default: uuidv4 },
    user_id: { type: String, required: true },
    friend_id: { type: String, required: true },
    content: { type: String, required: true },
    created_at: { type: Date, required: true },
    //updated_at: { type: Date, default: Date.now }
  });
  const MessageModel = mongoose.model<MessageType>('message', MessageSchema);
  export {MessageSchema,MessageModel} ;