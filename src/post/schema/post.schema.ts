import mongoose, { model,Schema } from 'mongoose';
import { v4 as uuidv4} from 'uuid';
import { PostType } from '../types';
import { PostModel } from '../model';

const PostSchema: Schema = new mongoose.Schema<PostType, PostModel>({
    _id : { type: String, default: uuidv4 },
    user_id: { type: String, required: true },
    content: { type: String, required: true },
    created_at: { type: Date, required: true },
    //updated_at: { type: Date, default: Date.now }
  });
  const PostModel = model<PostType>('post', PostSchema);
  export {PostSchema,PostModel} ;