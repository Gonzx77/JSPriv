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

export const addUser = async(arg) => {

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