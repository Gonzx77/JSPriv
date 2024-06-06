export const getAllUsers = async() => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    return data;
}

const validar = (arg) => {
    if (Object.keys(arg).length !== 14) {
        console.error("El argumento NO cumple la validacion: 'Cantidad de Argumentos'");
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
        return false;
    };

    return true;
}

export const addUser = async(arg) => {

    if (validar(arg)) {
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

        let res = await fetch("https://jsonplaceholder.typicode.com/albums", config) ;
        let data = await res.json();
        return data;
    }

    return false;
}