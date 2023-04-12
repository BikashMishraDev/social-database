import {Model} from 'mongoose';
import {  PostType } from '../types';


type PostModel = Model<PostType>;
export {PostModel} ;