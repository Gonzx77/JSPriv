import { local } from "./urls.js";
import { remoto } from "./urls.js";

export const getAllPosts = async() => {
    let res = await fetch(remoto.posts);
    let data = await res.json();
    return data;
}

const validarAdd = (arg) => {
    if (Object.keys(arg).length !== 3) {
        console.error("El argumento NO cumple la validacion: 'Numero de Argumentos'");
        return false;
    }
    if (!("userId" in arg) || !("title" in arg) || !("body" in arg)) {
        console.error("El argumento NO cumple la validacion: 'Nombre Argumentos'");
        return false;
    }
    if ((typeof arg.userId !== "string") || (typeof arg.title !== "string") || (typeof arg.body !== "string")) {
        console.error("El argumento NO cumple la validacion: 'Tipo de Dato'");
        return false;
    }
    return true;
}

const validarDelete = (id) => {
    if (typeof id !== "string") {
        return false;
    }
    return true;
}

export const addPost = async() => {
    let arg = {};

    arg.userId = prompt("Ingrese 'userId' para el post");
    arg.title = prompt("Ingrese 'title' para el post");
    arg.body = prompt("Ingrese 'body' para el post");

    if (validarAdd(arg)) {
        let userId = arg.userId;
        let title = arg.title;
        let body = arg.body;
    
        let config = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                userId,
                title,
                body
            })
        }

        let res = await fetch(remoto.posts, config) ;
        let data = await res.json();
        alert("Publicado !");
        return data;
    }

    return false;
}

export const deletePost = async()=>{
    let id = prompt("Ingrese ID del post a eliminar");
    if (validarDelete(id)) {
        let config = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
            }
            let res = await fetch(`${remoto.posts}/${id}`, config);
            let data = await res.json();
            alert("Eliminado !");
            return data;
    }
    return false;
}