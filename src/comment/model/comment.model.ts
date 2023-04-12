import { Model } from 'mongoose';
import {  CommentType } from '../types/index';


type CommentModel = Model<CommentType>
export {CommentModel} ;