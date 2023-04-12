// import {User} from './users/schema';
// User.find().then((response)=>{
//     console.log(response);
// })
// import {UserData} from './users/user.data';

// (async ()=>{
//     const a = await UserData.getUsers();
//     console.log(a);
// })()
import {PostData} from './post/post.data';

(async ()=>{
    const b = await PostData.getPosts();
    console.log(b);
})()