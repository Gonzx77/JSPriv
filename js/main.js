import {getAllAlbums, addAlbum, deleteAlbum, updateAlbum} from "./modules/albums.js";
import {getAllUsers, addUser, deleteUser} from "./modules/users.js";
import {getAllPosts, addPost, deletePost} from "./modules/posts.js";


const contenedor = document.getElementById('MGD2');


const gAlbum = document.getElementById('gAlbum');
const aAlbum = document.getElementById('aAlbum');
const dAlbum = document.getElementById('dAlbum');
const pAlbum = document.getElementById('pAlbum');

const gUser = document.getElementById('gUser');
const aUser = document.getElementById('aUser');
const dUser = document.getElementById('dUser');

const gPost = document.getElementById('gPost');
const aPost = document.getElementById('aPost');
const dPost = document.getElementById('dPost');

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
const DelAlbums = async() => {
    contenedor.innerHTML = "";
    let datos = await deleteAlbum();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}
const PutAlbums = async() => {
    contenedor.innerHTML = "";
    let datos = await updateAlbum();
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
const DelUser = async() => {
    contenedor.innerHTML = "";
    let datos = await deleteUser();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}

const GetPosts = async() => {
    contenedor.innerHTML = "";
    let datos = await getAllPosts();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}
const AddPosts = async() => {
    contenedor.innerHTML = "";
    let datos = await addPost();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}
const DelPosts = async() => {
    contenedor.innerHTML = "";
    let datos = await deletePost();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}

const Clear = async() => {
    contenedor.innerHTML = "";
}

gAlbum.addEventListener('click', GetAlbums);
aAlbum.addEventListener('click', AddAlbums);
dAlbum.addEventListener('click', DelAlbums);
pAlbum.addEventListener('click', PutAlbums);

gUser.addEventListener('click', GetUsers);
aUser.addEventListener('click', AddUsers);
dUser.addEventListener('click', DelUser);

gPost.addEventListener('click', GetPosts);
aPost.addEventListener('click', AddPosts);
dPost.addEventListener('click', DelPosts);

clear.addEventListener('click', Clear);