export const getAllPosts = async() => {
    let res = await fetch("http://172.16.101.146:5800/posts");
    let data = await res.json();
    return data;
}

const validar = (arg) => {
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

export const addPost = async(arg) => {

    if (validar(arg)) {
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

        let res = await fetch("http://172.16.101.146:5800/posts", config) ;
        let data = await res.json();
        return data;
    }

    return false;
}