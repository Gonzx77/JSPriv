export const getAllAlbums = async() => {
    let res = await fetch("https://jsonplaceholder.typicode.com/albums");
    let data = await res.json();
    return data;
}

const validar = (arg) => {
    if (Object.keys(arg).length !== 2) {
        console.error("El argumento NO cumple la validacion: '2 Argumentos'");
        return false;
    }
    if (!("userId" in arg) || !("title" in arg)) {
        console.error("El argumento NO cumple la validacion: 'Nombre Argumentos'");
        return false;
    }
    return true;
}

export const addAlbum = async(arg) => {

    if (validar(arg)) {
        let userId = arg.userId;
        let title = arg.title;
    
        let config = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                userId,
                title
            })
        }

        let res = await fetch("https://jsonplaceholder.typicode.com/albums", config) ;
        let data = await res.json();
        return data;
    }

    return false;
}