import {Model} from 'mongoose';
import {  MessageType } from '../types';


type MessageModel = Model<MessageType>;
export {MessageModel} ;