export type CommentType = {
    _id :string;
    user_id : string;
    
    post_id : string;
    comment: string;
    created_at: Date;
    //updated_at: Date;
  };
   export default CommentType;