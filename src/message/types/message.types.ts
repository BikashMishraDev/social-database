export type MessageType = {
    _id :string;
    user_id : string;
    friend_id: string;
    content: string;
    created_at: Date;
    //updated_at: Date;
  };
   export default MessageType;