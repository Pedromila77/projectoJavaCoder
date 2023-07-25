//PRODUCTOS
const productos = [
    //remeras
    {
    id: "remera01",
    titulo: "Remera 01",
    imagen: "../img/remeras/remera01.webp",
    categoria: {
        nombre: "Remeras",
        id: "remeras"
    },
    precio: 2500, 

    },
    {
        id: "remera02",
        titulo: "Remera 02",
        imagen: "../img/remeras/remera02.webp",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 2500, 
    
    },
    {
        id: "remera03",
        titulo: "Remera 03",
        imagen: "../img/remeras/remera03.webp",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 2500, 
    
    },
    {
        id: "remera04",
        titulo: "Remera 04",
        imagen: "../img/remeras/remera04.webp",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 2500, 
    
    },
    {
        id: "remera05",
        titulo: "Remera 05",
        imagen: "../img/remeras/remera05.webp",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 2500, 
    
        },
    
    //shorts

    {
        id: "short01",
        titulo: "Short 01",
        imagen: "../img/shorts/short01.webp",
        categoria: {
            nombre: "Shorts",
            id: "shorts"

        },
        precio: 2000
    },
    {
        id: "short02",
        titulo: "Short 02",
        imagen: "../img/shorts/short02.webp",
        categoria: {
            nombre: "Shorts",
            id: "shorts"

        },
        precio: 2000
    },
    {
        id: "short03",
        titulo: "Short 03",
        imagen: "../img/shorts/short03.webp",
        categoria: {
            nombre: "Shorts",
            id: "shorts"

        },
        precio: 2000
    },
    
    
    {
        id: "short04",
        titulo: "Short 04",
        imagen: "../img/shorts/short04.webp",
        categoria: {
            nombre: "Shorts",
            id: "shorts"

        },
        precio: 2000
    },
    
    
    {
        id: "short05",
        titulo: "Short 05",
        imagen: "../img/shorts/short05.webp",
        categoria: {
            nombre: "Shorts",
            id: "shorts"

        },
        precio: 2000
    }

]; 





const contenedorProductos = document.querySelector("#contenedorProductos");
const botonesCategoria = document.querySelectorAll(".botonCategoria");
const tituloPrincipal = document.querySelector("#tituloPrincipal");
let botonesAgregar = document.querySelectorAll(".productoAgregar");
const numerito = document.querySelector("#numerito");






function cargarProductos(productosElegidos) {
   
   contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}" class="productoImagen">
            <div class="productoCaracteristicas">
                <h3 class="productoTitulo">${producto.titulo}</h3>
                <p class="productoPrecio">$${producto.precio}</p>
                <button class="productoAgregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar()
}
cargarProductos(productos);

botonesCategoria.forEach(boton =>{
        boton.addEventListener("click", (e) => {

            botonesCategoria.forEach(boton => boton.classList.remove("active"));
            e.currentTarget.classList.add("active");

            if (e.currentTarget.id != "todos") {
                const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
                tituloPrincipal.innerText = productoCategoria.categoria.nombre;

                const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
                cargarProductos(productosBoton);
            } else {
                tituloPrincipal.innerText = "Todos los productos";
                cargarProductos(productos)    ;
            }
            


            
        })


});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".productoAgregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}


let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");



if(productosEnCarritoLS) {
     productosEnCarrito = JSON.parse(productosEnCarritoLS);
     actualizarNumerito(); 
} else {
    productosEnCarrito = [];
}



function agregarAlCarrito (e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
       productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
    
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
