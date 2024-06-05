import {getAllAlbums, addAlbum} from "./modules/albums.js";
import {getAllUsers, addUser} from "./modules/users.js";
import {getAllPosts} from "./modules/posts.js";


console.table(await addUser({rName: "Gonzalo", uName: "Gonzx77", email: "angobeal777@gmail.com", street: "204", suite: "B-76", city: "Bucaramanga",
zipcode: "777", lat: "prueba", lang: "prueba", phone: "3143248", website: "ZXPaPr", companyName: "ZX", catchPhrase: "nose77xd", bs: "prueba"}));