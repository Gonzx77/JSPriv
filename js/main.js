import {getAllAlbums, addAlbum} from "./modules/albums.js";
import {getAllUsers, addUser} from "./modules/users.js";
import {getAllPosts, addPost} from "./modules/posts.js";


console.table(await addPost({title: "titulo", body: "cuerpo", userId: 2}));