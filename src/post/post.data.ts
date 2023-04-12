import { Common } from '../common';
import {PostModel} from './schema';

const getPosts = async () => {
    const connection = await Common.Mongo.getConnection();
    return await PostModel.find();
  };
  
  export const PostData = {
    getPosts,
    
  };