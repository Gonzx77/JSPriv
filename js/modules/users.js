import { url } from "./urls.js";
let enlace = url;

export const getAllUsers = async() => {
    let res = await fetch(enlace.users);
    let data = await res.json();
    return data;
}

const validarAdd = async(arg) => {
    if (Object.keys(arg).length !== 14) {
        console.error("El argumento NO cumple la validacion: 'Numero de Argumentos'");
        return false;
    }

    if (!("rName" in arg) || !("uName" in arg) || !("email" in arg) || !("street" in arg) || !("suite" in arg) || !("city" in arg) || !("zipcode" in arg)
    || !("lat" in arg) || !("lang" in arg) || !("phone" in arg) || !("website" in arg) || !("companyName" in arg) || !("catchPhrase" in arg) || !("bs" in arg)) {
        console.error("El argumento NO cumple la validacion: 'Nombres de Argumentos'");
        return false;
    }

    if ((typeof arg.rName !== "string") || (typeof arg.uName !== "string") || (typeof arg.email !== "string") || (typeof arg.street !== "string")
    || (typeof arg.suite !== "string") || (typeof arg.city !== "string") || (typeof arg.zipcode !== "string") || (typeof arg.lat !== "string") || (typeof arg.lang !== "string")
    || (typeof arg.phone !== "string") || (typeof arg.website !== "string") || (typeof arg.companyName !== "string") || (typeof arg.catchPhrase !== "string")) {
        console.error("El argumento NO cumple la validacion: 'Tipo de Dato'");
        return false;
    };

    return true;
}

const validarDelete = async(id) => {
    if (typeof id !== "string") {
        return false;
    }

    let res = await fetch(`${enlace.users}/${id}`);
    if (res.status == "404") {
        alert("Este ID NO existe");
        return false;
    }

    alert("Este ID SI existe");
    return true;
}

const validarPut = async(id) => {
    if (typeof id !== "string") {
        return false;
    }

    let res = await fetch(`${enlace.posts}/${id}`);
    if (res.status == "404") {
        alert("Este ID NO existe");
        return false;
    }

    alert("Este ID SI existe");
    return true;
}

export const addUser = async() => {
    let arg = {};

    arg.uName = prompt("Ingrese 'name' para el usuario");
    arg.rName = prompt("Ingrese 'username' para el usuario");
    arg.email = prompt("Ingrese 'email' para el usuario");
    arg.street = prompt("Ingrese 'street' para el usuario");
    arg.suite = prompt("Ingrese 'suite' para el usuario");
    arg.city = prompt("Ingrese 'city' para el usuario");
    arg.zipcode = prompt("Ingrese 'zipcode' para el usuario");
    arg.lat = prompt("Ingrese 'lat' para el usuario");
    arg.lang = prompt("Ingrese 'lng' para el usuario");
    arg.phone = prompt("Ingrese 'phone' para el usuario");
    arg.website = prompt("Ingrese 'website' para el usuario");
    arg.companyName = prompt("Ingrese 'companyName' para el usuario");
    arg.catchPhrase = prompt("Ingrese 'catchPhrase' para el usuario");
    arg.bs = prompt("Ingrese 'bs' para el usuario");

    if (await validarAdd(arg)) {
        let rName = arg.rName;
        let uName = arg.uName;
        let email = arg.email;
        let street = arg.street;
        let suite = arg.suite;
        let city = arg.city;
        let zipcode = arg.zipcode;
        let lat = arg.lat;
        let lang = arg.lang;
        let phone = arg.phone;
        let website = arg.website;
        let companyName = arg.companyName;
        let catchPhrase = arg.catchPhrase;
        let bs = arg.bs;
    
        let config = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "name": rName,
                "username": uName,
                "email": email,
                "address": {
                    "street": street,
                    "suite": suite,
                    "city": city,
                    "zipcode": zipcode,
                    "geo": {
                        "lat": lat,
                        "lng": lang
                    }
                },
                "phone": phone,
                "website": website,
                "company": {
                    "name": companyName,
                    "catchPhrase": catchPhrase,
                    "bs": bs
                }
            })
        }

        let res = await fetch(enlace.users, config);
        let data = await res.json();
        alert("Publicado !");
        return data;
    }

    return false;
}

export const deleteUser = async()=>{
    let id = prompt("Ingrese ID del usuario a eliminar");

    if (await validarDelete(id)) {
        let config = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
            }
            let res = await fetch(`${enlace.users}/${id}`, config);
            let data = await res.json();
            alert("Eliminado !");
            return data;
    }
    return false;
}

export const updateUser = async() => {
    let id = prompt("Ingrese ID del album a editar");
    let arg = await fetch(`${enlace.users}/${id}`);

    if (await validarPut(id)) {
        arg = await arg.json();

        
        let NEWuName = prompt("Ingrese 'name' a editar (deje en blanco para mantener)");
        if ( NEWuName) {
            arg.name = NEWuName;
        }

        let NEWrName = prompt("Ingrese 'username' a editar (deje en blanco para mantener)");
        if (NEWrName) {
            arg.username = NEWrName;
        }

        let NEWemail = prompt("Ingrese 'email' a editar (deje en blanco para mantener)");
        if (NEWemail) {
            arg.email = NEWemail;
        }

        let NEWstreet = prompt("Ingrese 'street' a editar (deje en blanco para mantener)");
        if (NEWstreet) {
            arg.address.street = NEWstreet;
        }

        let NEWsuite = prompt("Ingrese 'suite' a editar (deje en blanco para mantener)");
        if (NEWsuite) {
            arg.address.suite = NEWsuite;
        }

        let NEWcity = prompt("Ingrese 'city' a editar (deje en blanco para mantener)");
        if (NEWcity) {
            arg.address.city = NEWcity;
        }

        let NEWzipcode = prompt("Ingrese 'zipcode' a editar (deje en blanco para mantener)");
        if (NEWzipcode) {
            arg.address.zipcode = NEWzipcode;
        }

        let NEWlat = prompt("Ingrese 'lat' a editar (deje en blanco para mantener)");
        if (NEWlat) {
            arg.address.geo.lat = NEWlat;
        }

        let NEWlng = prompt("Ingrese 'lng' a editar (deje en blanco para mantener)");
        if (NEWlng) {
            arg.address.geo.lng = NEWlng;
        }

        let NEWphone = prompt("Ingrese 'phone' a editar (deje en blanco para mantener)");
        if (NEWphone) {
            arg.phone = NEWphone;
        }

        let NEWwebsite = prompt("Ingrese 'website' a editar (deje en blanco para mantener)");
        if (NEWwebsite) {
            arg.website = NEWwebsite;
        }
        
        let NEWcompanyName = prompt("Ingrese 'companyName' a editar (deje en blanco para mantener)");
        if (NEWcompanyName) {
            arg.company.name = NEWcompanyName;
        }

        let NEWcatchPhrase = prompt("Ingrese 'catchPhrase' a editar (deje en blanco para mantener)");
        if (NEWcatchPhrase) {
            arg.company.catchPhrase = NEWcatchPhrase;
        }

        let NEWbs = prompt("Ingrese 'bs' a editar (deje en blanco para mantener)");
        if (NEWbs) {
            arg.company.bs = NEWbs;
        }
    
        let config = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(arg)
        }

        let res = await fetch(`${enlace.users}/${arg.id}`, config);
        let data = await res.json();
        alert("Actualizado !");
        return data;
    }

    return false;
}