const pintarProductos = () => {
    const contenedor = document.querySelector('.box-container');
    
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'box';

        div.innerHTML = `
        <div class="image">
            <img src="${producto.img}">
            <div class="icons">
                <button class="cart-btn" onclick="addToCart(${producto.id})">Agregar al carrito</button>
            </div>
        </div>
        <div class="content">
            <h3>${producto.descripcion}</h3>
            <div class="price">$ ${producto.precio}</div>
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
    alert('Producto añadido al carrito');
};