/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('socialmedia-data');
db.users.drop();
db.post.drop();
db.comment.drop();
db.message.drop();
db.friends.drop();
db.profile.drop();
// Insert a few documents into the sales collection.
db.users.insertMany([
  { 'username': 'abc', 'password': 'abc', createdAt: new Date() },
  { 'username': 'abc1', 'password': 'abc1', createdAt: new Date() },
]);
db.post.insertOne([
  {'user_id': 'abcyyujhh', 'content': '6788abc', createdAt: new Date() },
]);
db.comment.insertOne([
  {'user_id':"abhggjk","post_id":"ryiohbfhjjk","comment":"you",createdAt: new Date() },
]);
db.message.insertOne([
  {'user_id':"abhoiiiggjk","friend_id":"ryggggiohbfhjjk","message":"you"},
]);
db.friends.insertOne([
  {'user_id':"abhggjk","friend_id":"ryiohbfhjjk","request":"accept" },
]);
db.profile.insertOne([
  {'firstName':"abhggjk","lastName":"ryiohbfhjjk","dob":Date(),"gender":"male" },
]);

