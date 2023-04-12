import mongoose, { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { CommentType } from '../types/comment.types';
import { CommentModel } from '../model';

const CommentSchema: Schema = new mongoose.Schema<CommentType, CommentModel>({
  _id: { type: String, default: uuidv4 },
  user_id: { type: String, required: true },
  post_id: { type: String, required: true },
  comment: { type: String, required: true },
  created_at: { type: Date, required: true },
  //updated_at: { type: Date, default: Date.now }
});
const CommentModel = mongoose.model<CommentType>('comment', CommentSchema);
export { CommentModel, CommentSchema };