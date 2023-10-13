// ARRAYS DE PRENDAS

let nombreUsuario = prompt("Ingresa tu nombre")
function bienvenida(nombre){
    alert("Bienvenido/a " + nombreUsuario)
    console.log(nombre)
}
bienvenida()


function login() {
    let contraseña = "Tienda";
    let ingresar = false;
    for(let i = 5; i > 0; i--){
        let contraseñaUsuario = prompt("Ingresa tu contraseña para poder seguir navegando. Te quedan "+ i +" intentos.")
        if(contraseñaUsuario === contraseña){
            alert("ingreso exitoso. Podes seguir navegando");
            ingresar = true;
            break;
        }else{
            alert("Contraseña incorrecta. "+ (i-1) +" intentos restantes")
        }
    }
    return ingresar; 
}

if (login()) {
    let prendas = prompt(
        "¿Que prenda estas buscando?: \nA - Remeras \nB - Pantalones \nC - Buzos/camperas \nD - Zapatillas");
    switch (prendas){
        case "A":
            // prompt ("Seleccionaste remeras");
            const tiposderemeras = [
                {
                    id: 0,
                    prenda: 'Remera',
                    marca: 'Nike',
                    talles: 'XS S M L XL',
                    stock: true,
                    precio: 17500,
                },
                {
                    id: 1,
                    prenda: 'Remera',
                    marca: 'Adidas',
                    talles:  'S M L XL',
                    stock: true,
                    precio: 15800,
                },
                {
                    id: 2,
                    prenda: 'Remera',
                    marca: 'Puma',
                    talles: 'S M L',
                    stock: true,
                    precio: 14750,
                }
            ];
            
            const remerasdisponibles = () => {
                let mensaje = "\nPrendas disponibles: \n";
            
                tiposderemeras.map((ropa) => {
                    mensaje += `\n Prenda: ${ropa.prenda} \n Marca: ${ropa.marca} \n Talles: ${ropa.talles} \n Precio: ${ropa.precio} ars. \n -------------------------- \n`;
                });
            
                alert(mensaje);
            }
            
            remerasdisponibles();
            break;
        case "B":
            // alert("Seleccionaste pantalones");
            const tipodepantalones = [
                {
                    id: 3,
                    prenda: 'Pantalon',
                    marca: 'Nike',
                    talles: 'XS S M L XL',
                    stock: true,
                    precio: 19250,
                },
                {
                    id: 4,
                    prenda: 'Pantalon',
                    marca: 'Adidas',
                    talles:  'S M L XL',
                    stock: true,
                    precio: 17800,
                },
                {
                    id: 5,
                    prenda: 'Pantalon',
                    marca: 'Puma',
                    talles: 'S M L',
                    stock: true,
                    precio: 12750,
                }
            ];
            
            const pantalonesdisponibles = () => {
                let mensaje = "\nPrendas disponibles: \n";
            
                tipodepantalones.map((ropa) => {
                    mensaje += `\n Prenda: ${ropa.prenda} \n Marca: ${ropa.marca} \n Talles: ${ropa.talles} \n Precio: ${ropa.precio} ars. \n -------------------------- \n`;
                });
            
                alert(mensaje);
            }
            
            pantalonesdisponibles();
            break;
        case "C":
            // alert("Seleccionaste buzos/camperas");
            const tipodeabrigo = [
                {
                    id: 3,
                    prenda: 'Abrigos',
                    marca: 'Nike',
                    talles: 'XS S M L XL',
                    stock: true,
                    precio: 24250,
                },
                {
                    id: 4,
                    prenda: 'Abrigos',
                    marca: 'Adidas',
                    talles:  'S M L XL',
                    stock: true,
                    precio: 22800,
                },
                {
                    id: 5,
                    prenda: 'Abrigos',
                    marca: 'Puma',
                    talles: 'S M L',
                    stock: true,
                    precio: 19750,
                }
            ];
            
            const abrigosdisponibles = () => {
                let mensaje = "\nPrendas disponibles: \n";
            
                tipodeabrigo.map((ropa) => {
                    mensaje += `\n Prenda: ${ropa.prenda} \n Marca: ${ropa.marca} \n Talles: ${ropa.talles} \n Precio: ${ropa.precio} ars. \n -------------------------- \n`;
                });
            
                alert(mensaje);
            }
            
            abrigosdisponibles();
            break;
        case "D":
            // alert("Seleccionaste zapatillas");
            const tipodezapatillas = [
                {
                    id: 3,
                    prenda: 'Zapatillas',
                    marca: 'Nike',
                    talles: 'XS S M L XL',
                    stock: true,
                    precio: 96700,
                },
                {
                    id: 4,
                    prenda: 'Zapatillas',
                    marca: 'Adidas',
                    talles:  'S M L XL',
                    stock: true,
                    precio: 82500,
                },
                {
                    id: 5,
                    prenda: 'Zapatillas',
                    marca: 'Puma',
                    talles: 'S M L',
                    stock: true,
                    precio: 77250,
                }
            ];
            
            const zapatillasdisponibles = () => {
                let mensaje = "\nPrendas disponibles: \n";
            
                tipodezapatillas.map((ropa) => {
                    mensaje += `\n Prenda: ${ropa.prenda} \n Marca: ${ropa.marca} \n Talles: ${ropa.talles} \n Precio: ${ropa.precio} ars. \n -------------------------- \n`;
                });
            
                alert(mensaje);
            }
            
            zapatillasdisponibles();
            break;
        case "Remeras":
            alert("Seleccionaste remeras");
            break;
        case "Pantalones":
            alert("Seleccionaste pantalones");
            break;
        case "Buzos/camperas":
            alert("Seleccionaste buzos/camperas");
            break;
        case "Zapatillas":
            alert("Seleccionaste zapatillas");
            break;
        default:
            alert("Seleccionaste una opcion incorrecta");
            break;
    }
}

