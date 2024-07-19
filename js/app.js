const pintarProductos = () => {
    
    const contenedor = document.querySelector('.box-container');
    
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'box card col-3';

        div.innerHTML = `
            <img class="card-img-top" src="${producto.img}">
            <div class="content card-body">
            <h2 class="price card-title">$ ${producto.precio}</h2>
            <p class="card-text">${producto.descripcion}</p>
            <button class="cart-btn btn btn-primary" onclick="addToCart(${producto.id})">Agregar al carrito</button>
            </div>
        </div>
        `

        contenedor.appendChild(div);
    });
};

pintarProductos();


const carritoCompra = document.querySelector('#carrito');
const contenedor = document.querySelector('.box-container');

let contador = 0;

const actualizarContador = () => {
    carritoCompra.textContent = contador;
};

contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-btn')) {
        contador++
        actualizarContador();
    }
});


const addToCart = (productoId) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const producto = productos.find(p => p.id === productoId);
    carrito.push(producto);

    localStorage.setItem('carrito', JSON.stringify(carrito));

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timeProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'El producto se agregó al carrito'
    })
};