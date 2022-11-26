function agregarProducto() {    
    let nuevoProducto1  = parseInt(prompt("¿Cuántos desea agregar?")); 
    if (nuevoProducto1 <= 0) { 
        alert(`Por favor, ingrese una cantidad mayor a cero`);  
    } else if (nuevoProducto1 == 1) {
        cantidadProducto1 += nuevoProducto1;
        alert(`Se agregó 1 unidad. El stock actual es de ${cantidadProducto1}`); 
    } else {
        cantidadProducto1 += nuevoProducto1;
        alert(`Se agregaron ${nuevoProducto1} unidades. El stock actual es de ${cantidadProducto1}`);   
    }
    return cantidadProducto1;
}

function ventaProducto() { 
    let ventaProducto = 0;
    if (cantidadProducto1 <= 0) {
        alert(`No hay stock del producto. Por favor, asegúrese de agregar unidades`);         
    } else {
        ventaProducto = parseInt(prompt(`El stock actual es de ${cantidadProducto1}. ¿Cuántos deseas vender?`));        
        if ((cantidadProducto1 - ventaProducto) < 0) {
            if (cantidadProducto1 > 1) {
                alert(`No hay stock suficiente para concretar la venta, solo hay ${cantidadProducto1} unidades disponibles. Por favor, ingrese una nueva cantidad (menor o igual a ${cantidadProducto1})`); 
            } else if (cantidadProducto1 == 1 ) {
                alert(`No hay stock suficiente para concretar la venta, solo hay 1 unidad disponible para la venta.`);
            } else {
                alert(`No hay stock del producto. Por favor, asegúrese de agregar unidades`); 
            }
        } else if ((cantidadProducto1 - ventaProducto) == 0) {
            cantidadProducto1 -= ventaProducto;
            if (ventaProducto == 1) {
                alert(`¡Se descontó 1 unidad!`); 
            } else {
                alert(`¡Se descontaron ${ventaProducto} unidades!`); 
            }
            alert(`No hay stock del producto. Por favor, asegúrese de agregar unidades`);      
        } else if ((cantidadProducto1 - ventaProducto) == 1) {
            cantidadProducto1 -= ventaProducto;
            if (ventaProducto == 1) {
                alert(`¡Se descontó 1 unidad!`); 
            } else {
                alert(`¡Se descontaron ${ventaProducto} unidades!`); 
            }
            alert(`Hay poco stock, solo queda 1 unidad disponible`);         
        } else if ((cantidadProducto1 - ventaProducto) < 10) {
            cantidadProducto1 -= ventaProducto;
            alert(`¡Se descontaron ${ventaProducto} unidades!`); 
            if (cantidadProducto1 > 0) {
                alert(`Hay poco stock, solo quedan ${cantidadProducto1} unidades disponibles`); 
            } else {
                alert(`No hay stock del producto. Por favor, asegúrese de agregar unidades`); 
            }
        } else {
            cantidadProducto1 -= ventaProducto;
            alert(`¡Se descontaron ${ventaProducto} unidades!`);
            alert(`Hay ${cantidadProducto1} unidades disponibles`); 
        } 
    }
    return cantidadProducto1;
}

function stockProducto() { 
    if (cantidadProducto1 == 0) {
        alert(`No hay stock del producto`); 
    } else if (cantidadProducto1 < 10) {
        alert(`Hay poco stock, solo quedan ${cantidadProducto1} unidades disponibles`); 
    } else {
        alert(`Hay ${cantidadProducto1} unidades disponibles`); 
    }   
    return cantidadProducto1;
}

function decision(accionProducto) {
    switch (accionProducto) {
        case 1:
            agregarProducto();
            break;
        case 2:
            ventaProducto();
            break;
        case 3:
            stockProducto();            
            break; 
        default:            
            break;
    }   
}

let cantidadProducto1 = 0;

let accionProducto = 0;

let pass = "Contra1234";

let dato = prompt("Ingrese la clave de su sistema de control de stock");

let acceso = 0;

for (let intentos = 0; intentos <3; intentos++) {
    if (dato === pass) {
        acceso = 1;
        intentos = 3;
    } else {
        acceso = 0;
        alert("Clave incorrcta");
        dato = prompt("Cual es la clave?");
    }
}

if (acceso == 1) {
    do {
        accionProducto = parseInt(prompt("Ingrese el número de lo que desea realizar\n1 - Ingresar producto\n2 - Vender producto\n3 - Consultar stock\n0 - Salir"));
        decision(accionProducto);    
    } while (accionProducto);
} else {
    alert("No se pudo iniciar seció correcamtente. Si olvidó su contraseña contáctese con el administrador del sitio");
}