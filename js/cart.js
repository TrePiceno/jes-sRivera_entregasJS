document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.cart-container');
    const totalProductosElem = document.getElementById('total-productos');
    const totalPagarElem = document.getElementById('total-pagar');

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    let totalProductos = 0;
    let totalPagar = 0;

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'cart-item';

        div.innerHTML = `
            <img src="${producto.img}" alt="${producto.descripcion}" class="img-size">
            <h3>${producto.descripcion}</h3>
            <p>Precio: $ ${producto.precio}</p>
            <button onclick="removeFromCart(${producto.id})">Eliminar</button>
        `;

        cartContainer.appendChild(div);

        totalProductos += 1;
        totalPagar += producto.precio;
    });

    totalProductosElem.textContent = totalProductos;
    totalPagarElem.textContent = totalPagar.toFixed(2);
});


const removeFromCart = (productoId) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito = carrito.filter(producto => producto.id !== productoId);

    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Recargar la página para actualizar el carrito
    location.reload();
};