import {getAllAlbums, addAlbum} from "./modules/albums.js";
import {getAllUsers, addUser} from "./modules/users.js";
import {getAllPosts, addPost, deletePost} from "./modules/posts.js";


let op = prompt("Quiere ejecutar el codigo? (si / no)");

if (op.toLowerCase() === "si" ) {
    console.table(await getAllAlbums());
}