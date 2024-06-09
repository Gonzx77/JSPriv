import {getAllAlbums, addAlbum, deleteAlbum, updateAlbum} from "./modules/albums.js";
import {getAllUsers, addUser, deleteUser, updateUser} from "./modules/users.js";
import {getAllPosts, addPost, deletePost, updatePost} from "./modules/posts.js";
import {getAllComments, addComment, deleteComment, updateComment} from "./modules/comments.js";
import {getAllPhotos, addPhoto, deletePhoto, updatePhoto} from "./modules/photos.js";


const contenedor = document.getElementById('MGD2');


const gAlbum = document.getElementById('gAlbum');
const aAlbum = document.getElementById('aAlbum');
const dAlbum = document.getElementById('dAlbum');
const pAlbum = document.getElementById('pAlbum');

const gUser = document.getElementById('gUser');
const aUser = document.getElementById('aUser');
const dUser = document.getElementById('dUser');
const pUser = document.getElementById('pUser');

const gPost = document.getElementById('gPost');
const aPost = document.getElementById('aPost');
const dPost = document.getElementById('dPost');
const pPost = document.getElementById('pPost');

const gComment = document.getElementById('gComment');
const aComment = document.getElementById('aComment');
const dComment = document.getElementById('dComment');
const pComment = document.getElementById('pComment');

const gPhoto = document.getElementById('gPhoto');
const aPhoto = document.getElementById('aPhoto');
const dPhoto = document.getElementById('dPhoto');
const pPhoto = document.getElementById('pPhoto');

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
const PutUser = async() => {
    contenedor.innerHTML = "";
    let datos = await updateUser();
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
const PutPosts = async() => {
    contenedor.innerHTML = "";
    let datos = await updatePost();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}
const GetComments = async() => {
    contenedor.innerHTML = "";
    let datos = await getAllComments();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}
const AddComments = async() => {
    contenedor.innerHTML = "";
    let datos = await addComment();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}
const DelComments = async() => {
    contenedor.innerHTML = "";
    let datos = await deleteComment();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}
const PutComments = async() => {
    contenedor.innerHTML = "";
    let datos = await updateComment();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}

const GetPhotos = async() => {
    contenedor.innerHTML = "";
    let datos = await getAllPhotos();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}
const AddPhotos = async() => {
    contenedor.innerHTML = "";
    let datos = await addPhoto();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}
const DelPhotos = async() => {
    contenedor.innerHTML = "";
    let datos = await deletePhoto();
    contenedor.innerHTML = `<pre>${JSON.stringify(datos, null, 2)}</pre>`;
}
const PutPhotos = async() => {
    contenedor.innerHTML = "";
    let datos = await updatePhoto();
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
pUser.addEventListener('click', PutUser);

gPost.addEventListener('click', GetPosts);
aPost.addEventListener('click', AddPosts);
dPost.addEventListener('click', DelPosts);
pPost.addEventListener('click', PutPosts);

gComment.addEventListener('click', GetComments);
aComment.addEventListener('click', AddComments);
dComment.addEventListener('click', DelComments);
pComment.addEventListener('click', PutComments);

gPhoto.addEventListener('click', GetPhotos);
aPhoto.addEventListener('click', AddPhotos);
dPhoto.addEventListener('click', DelPhotos);
pPhoto.addEventListener('click', PutPhotos);

gPhoto.addEventListener('click', GetPhotos);

clear.addEventListener('click', Clear);