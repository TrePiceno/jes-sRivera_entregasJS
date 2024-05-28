// Simulador de filtrado de productos por el usuario ''

const CATEGORIA = () => {
    let categoriaSeleccionada;
    let nombreUsuario;

    do {
        nombreUsuario = prompt("Bienvenido a mi primer simulador, ¿Con quién tengo el gusto?");
        let categorias = Number(prompt('Mucho gusto ' + nombreUsuario + ', elija un número según la categoría que desea consultar:\n' +
            '1: Memorias Ram \n' +
            '2: Memorias USB \n' +
            '3: Memorias MicroSD \n' +
            '4: Salir \n'));

        while (nombreUsuario === '' || !isNaN(nombreUsuario) || categorias < 1 || categorias > 4 || isNaN(categorias)) {
            alert("Ingresa datos correctos por favor:");
            nombreUsuario = prompt("Bienvenido a mi primer simulador, ¿Con quién tengo el gusto?");
            categorias = Number(prompt('Mucho gusto ' + nombreUsuario + ', elija un número según la categoría que desea consultar:\n' +
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
                return null;
            default:
                alert("Opción no válida. Intenta de nuevo.");
                continue;
        }

        if (categorias !== 4) {
            alert("Señor(a) " + nombreUsuario + ", usted ha elegido la categoría: " + categoriaSeleccionada);
            console.log("Categoría seleccionada:", categoriaSeleccionada);
            const marcaSeleccionada = MARCA(categoriaSeleccionada);
            if (marcaSeleccionada) {
                alert("Has seleccionado la marca: " + marcaSeleccionada);
                console.log("Marca seleccionada:", marcaSeleccionada);
            }
        }
    } while (categorias !== 4);

    return categoriaSeleccionada;
};

const MARCA = (categoriaSeleccionada) => {
    let marcaMemoria;

    const marcasPorCategoria = {
        "Memorias Ram": ["Samsung", "Corsair", "Kingston"],
        "Memorias USB": ["SanDisk", "ADATA", "Kingston"],
        "Memorias MicroSD": ["SanDisk", "Samsung", "Kingston"]
    };

    const marcas = marcasPorCategoria[categoriaSeleccionada];
    let mensajeMarcas = "Elija un número según su marca preferida:\n";

    marcas.forEach((marca, index) => {
        mensajeMarcas += `${index + 1}: ${marca}\n`;
    });

    do {
        let marca = Number(prompt(mensajeMarcas));

        while (Number.isNaN(marca) || marca < 1 || marca > marcas.length) {
            alert('Debe agregar un número del 1 al ' + marcas.length + ', por favor.');
            marca = Number(prompt(mensajeMarcas));
        }

        marcaMemoria = marcas[marca - 1];
    } while (!marcaMemoria);

    return marcaMemoria;
};

CATEGORIA()