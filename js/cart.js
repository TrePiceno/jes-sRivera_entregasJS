document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.cart-container');
    const totalProductosElem = document.getElementById('total-productos');
    const totalPagarElem = document.getElementById('total-pagar');

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    let totalProductos = 0;
    let totalPagar = 0;

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'cart-item card col-xl-4 col-lg-6';

        div.innerHTML = `
            <img class="card-img-top" src="${producto.img}">
            <div class="content card-body">
            <p class="card-text">${producto.descripcion}</p>
            <h2 class="card-title">Precio: $ ${producto.precio}</h2>
            <button class="btn btn-primary" onclick="removeFromCart(${producto.id})">Eliminar</button>
            </div>
        </div>
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

    MostrarNotificación();
};

function MostrarNotificación() {
    Swal.fire({
        title: '¿Está seguro?',
        text: "¡Va a eliminar el producto!",
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar',
    }).then((result) => {
        if (result.confirmed) {
            Swal.fire(
                'Eliminado',
                'El producto ha sido eliminado.',
                'success'
            )
        }
        location.reload();
    }
    )
}
