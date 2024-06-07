import { local } from "./urls.js";
import { remoto } from "./urls.js";

export const getAllUsers = async() => {
    let res = await fetch(remoto.users);
    let data = await res.json();
    return data;
}

const validarAdd = (arg) => {
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

const validarDelete = (id) => {
    if (typeof id !== "string") {
        return false;
    }
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

    if (validarAdd(arg)) {
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

        let res = await fetch(remoto.users, config) ;
        let data = await res.json();
        alert("Publicado !");
        return data;
    }

    return false;
}

export const deleteUser = async(id)=>{
    if (validarDelete(id)) {
        let config = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
            }
            let res = await fetch(`${remoto.users}/${id}`, config);
            let data = await res.json();
            return data;
    }
    return false;
}