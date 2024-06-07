import {getAllAlbums, addAlbum, deleteAlbum} from "./modules/albums.js";
import {getAllUsers, addUser, deleteUser} from "./modules/users.js";
import {getAllPosts, addPost, deletePost} from "./modules/posts.js";


const contenedor = document.getElementById('MGD2');


const gAlbum = document.getElementById('gAlbum');
const aAlbum = document.getElementById('aAlbum');

const gUser = document.getElementById('gUser');
const aUser = document.getElementById('aUser');

const gPost = document.getElementById('gPost');

const clear = document.getElementById('clear');


const GetAlbums = async() => {
    contenedor.innerHTML = "";
    let datos = await getAllAlbums();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}
const AddAlbums = async() => {
    contenedor.innerHTML = "";
    let datos = await addAlbum();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}

const GetUsers = async() => {
    contenedor.innerHTML = "";
    let datos = await getAllUsers();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}
const AddUsers = async() => {
    contenedor.innerHTML = "";
    let datos = await addUser();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}

const GetPosts = async() => {
    contenedor.innerHTML = "";
    let datos = await getAllPosts();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}

const Clear = async() => {
    contenedor.innerHTML = "";
}

gAlbum.addEventListener('click', GetAlbums);
aAlbum.addEventListener('click', AddAlbums);

gUser.addEventListener('click', GetUsers);
aUser.addEventListener('click', AddUsers);

gPost.addEventListener('click', GetPosts);

clear.addEventListener('click', Clear);