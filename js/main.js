import {getAllAlbums, addAlbum} from "./modules/albums.js";
import {getAllUsers} from "./modules/users.js";

console.table(await getAllUsers());