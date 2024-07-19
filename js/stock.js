const productos = 
[
    {
        id: 1,
        tipo: "Memoria MicroSD", 
        img: "../assets/Micro SD Generica.jpg",
        marca: "ADATA", 
        descripcion: "Memoria MicroSD ADATA / Adaptador SD / 32GB / Clase 10 / UHS-I", 
        capacidad: "32GB",
        precio: 200 
    },

    {
        id: 2,
        tipo: "Memoria MicroSD", 
        img: "../assets/Micro SD Generica.jpg",
        marca: "ADATA", 
        descripcion: "Memoria MicroSD ADATA / Adaptador SD / 64GB / Clase 10 / UHS-I",
        capacidad: "64GB", 
        precio: 400 
    },    

    { 
        id: 3,
        tipo: "Memoria MicroSD", 
        img: "../assets/Micro SD Generica.jpg",
        marca: "ADATA",
        descripcion: "Memoria MicroSD ADATA / Adaptador SD / 128GB / Clase 10 / UHS-I", 
        capacidad: "128GB", 
        precio: 800 
    },

    {
        id: 4,
        tipo: "Memoria Ram", 
        img: "../assets/Ram generica 2.png",
        marca: "ADATA", 
        descripcion: "Memoria Ram ADATA / DDR4 / 8GB / 3200Mhz / SODIMM", 
        capacidad: "8GB", 
        precio: 200 
    },

    {
        id: 5,
        tipo: "Memoria Ram", 
        img: "../assets/Ram generica 2.png",
        marca: "ADATA", 
        descripcion: "Memoria Ram ADATA / DDR4 / 16GB / 3200Mhz / SODIMM", 
        capacidad: "16GB", 
        precio: 400 
    },

    { 
        id: 6,
        tipo: "Memoria Ram",
        img: "../assets/Ram generica 2.png", 
        marca: "ADATA",
        descripcion: "Memoria Ram ADATA / DDR4 / 32GB / 3200Mhz / SODIMM", 
        capacidad: "32GB", 
        precio: 800 
    },

    {
        id: 7,
        tipo: "Memoria USB", 
        img: "../assets/Memoria USB generica.jpg",
        marca: "ADATA",  
        descripcion: "Memoria USB ADATA / USB 3.2 / 32GB / Lectura 200 MB/s / Escritura 20MB/s",
        capacidad: "32GB", 
        precio: 200 
    },

    {
        id: 8,
        tipo: "Memoria USB", 
        img: "../assets/Memoria USB generica.jpg",
        marca: "ADATA", 
        descripcion: "Memoria USB ADATA / USB 3.2 / 64GB / Lectura 200 MB/s / Escritura 20MB/s", 
        capacidad: "64GB", 
        precio: 400 
    },

    { 
        id: 9,
        tipo: "Memoria USB", 
        img: "../assets/Memoria USB generica.jpg",
        marca: "ADATA", 
        descripcion: "Memoria USB ADATA / USB 3.2 / 128GB / Lectura 200 MB/s / Escritura 20MB/s",
        capacidad: "128GB", 
        precio: 800 
    }

];

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
};

getProducts()
    .then((productos) => {
    console.log(productos);})
    .catch((error) => {
        console.log(error);
    });