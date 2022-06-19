const productos = [
    {
        id: 1,
        nombre: "bermuda abama negra",
        precio: 3500,
        imagen: "bermuda abama negra.jpg",
        descripcion: "bermuda ideal para entrenar",
    },
    {
        id: 2,
        nombre: "bermuda abama roja",
        precio: 3500,
        imagen: "bermuda abama roja.jpg",
        descripcion: "bermuda ideal para entrenar",
    },
    {   id: 3,
        nombre: "buzo abama",
        precio: 5500,
        imagen: "buzo abama.jpg",
        descripcion: "buzo de algodon de la academia",
    },
    {   id: 4,
        nombre: "joggin abama",
        precio: 4500,
        imagen: "joggin abama.jpg",
        descripcion: "joggin de algodon de la academia",
    },
    {   id: 5,
        nombre: "lycra abama",
        precio: 4500,
        imagen: "lycra abama .jpg",
        descripcion: "lycra ideal para entrenar",
    },
    {   id: 6,
        nombre: "remera abama",
        precio: 2500,
        imagen: "remera abama.png",
        descripcion: "remera de algodon de la academia",
    },
    {   id: 7,
        nombre: "short de muay thai",
        precio: 3500,
        imagen: "short thai.jpg",
        descripcion: "short ideal para la práctica del muay thai",
    },
];

function guardarProductosLs(productos){
    localStorage.setItem("productos", JSON.stringify(productos));
} 

function cargarProductosLs(){
    return JSON.parse(localStorage.getItem("productos"));
}