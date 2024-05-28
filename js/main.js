// Simulador de filtrado de productos por el usuario ''


let categoriaSeleccionada;

do {
    let nombreUsuario = prompt("Bienvenido a mi primer simulador, ¿Con quién tengo el gusto?");

    let categorias = Number(prompt('Mucho gusto ' + nombreUsuario + ' eliga un número según la categoría que desea consultar:\n' +
    '1: Memorias Ram \n' +
    '2: Memorias USB \n' +
    '3: Memorias MicroSD \n' +
    '4: Salir \n'));

    while (nombreUsuario === '' || !isNaN(nombreUsuario) || categorias < 0 || categorias > 4 || isNaN(categorias)) {
    alert("Ingresa datos correctos por favor:");
    nombreUsuario = prompt("Bienvenido a mi primer simulador, ¿Con quién tengo el gusto?");
    categorias = Number(prompt('Mucho gusto ' + nombreUsuario + ' eliga un número según la categoría que desea consultar:\n' +
        '1: Memorias Ram \n' +
        '2: Memorias USB \n' +
        '3: Memorias MicroSD \n' +
        '4: Salir \n'));
    }

    switch (categorias) {
        case 1:
        categoriaSeleccionada = "Memorias Ram";
        break;
        case 2:
        categoriaSeleccionada = "Memorias USB";
        break;
        case 3:
        categoriaSeleccionada = "Memorias MicroSD";
        break;
        case 4:
        alert("Gracias por usar mi simulador. ¡Hasta pronto!");
        break;
        default:
        alert("Opción no válida. Intenta de nuevo.");
        break;
    }

    alert("Señor(a) " + nombreUsuario + " usted ha elegido la categoría: " + categoriaSeleccionada);
    console.log("Categoría seleccionada:", categoriaSeleccionada);
    } while (categorias !== 4);
