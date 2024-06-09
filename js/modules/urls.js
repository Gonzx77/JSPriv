//json-server storage/albums.json -b 5501 & json-server storage/posts.json -b 5502 & json-server storage/users.json -b 5503 & json-server storage/comments.json -b 5504 & json-server storage/photos.json -b 5505

const local = ({
    albums: "http://172.16.101.146:5802/albums",
    posts: "http://172.16.101.146:5800/posts",
    users: "http://172.16.101.146:5804/users",
    comments: "http://172.16.101.146:5801/comments",
    photos: "http://172.16.101.146:5803/photos"
});

const pc = ({
    albums: "http://localhost:5501/",
    posts: "http://localhost:5502/",
    users: "http://localhost:5001/",
    comments: "http://localhost:5504/",
    photos: "http://localhost:5505/"
});

const placeHolder = ({
    albums: "https://jsonplaceholder.typicode.com/albums",
    posts: "https://jsonplaceholder.typicode.com/posts",
    users: "https://jsonplaceholder.typicode.com/users",
    comments: "https://jsonplaceholder.typicode.com/comments",
    photos: "https://jsonplaceholder.typicode.com/photos"
})

const remoto = ({
    albums: "https://53977d67df4867e88ad92ace77f41d81.serveo.net/albums",
    posts: "https://ea9cb12e1fd707dd59cabd0bcfaca5bf.serveo.net/posts",
    users: "https://b426bc73b31fd3e606372972aae17324.serveo.net/users",
    comments: "https://08c66d6fa43b0d8452d54ee3978c023b.serveo.net/comments",
    photos: "https://eeb0d5d633a3ac44a1c6ad64f07d43a4.serveo.net/photos"
});

export const url = placeHolder;