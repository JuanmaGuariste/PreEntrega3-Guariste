class Producto {
    constructor(tipoVehiculo, modeloCubierta, marca, precio, stock) {
        this.tipoVehiculo = tipoVehiculo;
        this.modeloCubierta = modeloCubierta;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;         
    }
}

let listaProductos = [
    {tipoVehiculo: "auto",
    modeloCubierta: "1757013",
    marca: "fate",
    precio: 45000,
    stock:  50
    },
    {tipoVehiculo: "camioneta",
    modeloCubierta: "1955515",
    marca: "pirelli",
    precio: 65000,
    stock:  30
    },
    {tipoVehiculo: "moto",
    modeloCubierta: "909018",
    marca: "pirelli",
    precio: 20000,
    stock:  100
    },
];

const asignarTipo = (vehiculo) => {   
    switch (vehiculo) {
        case 1:
            vehiculo = "moto";
            break;
        case 2:
            vehiculo = "auto";
            break;
        case 3:
            vehiculo = "camioneta";
            break;
        case 4:
            vehiculo = "camion";
            break;
        default:
            alert("Ingrese un número válido.");   
            vehiculo = "";         
            break;
    }
    return vehiculo;
}

const validarValor = (producto) => { 
    let valido;
    if (producto == "") {
        alert(`Por favor, complete el campo.`);     
        valido = 0;
    } else { 
        valido = 1;  
    }
    return valido;
}

const agregarStock = (modeloCubierta, marca) => { 
    let nuevoProducto1 = prompt("¿Cuántos desea agregar?"); 
    if (validarValor(nuevoProducto1)) {
        nuevoProducto1 = parseInt(nuevoProducto1);
        listaProductos.forEach(product => {  
            if (product.modeloCubierta == modeloCubierta && product.marca == marca) {
                if ((nuevoProducto1 <= 0) ) { 
                    alert(`Por favor, ingrese una cantidad mayor a cero.`);  
                } else if (nuevoProducto1 == 1) {
                    product.stock += nuevoProducto1;
                    alert(`Se agregó 1 unidad. El stock actual es de ${product.stock}.`);                         
                } else {
                    product.stock+= nuevoProducto1;
                    alert(`Se agregaron ${nuevoProducto1} unidades. El stock actual es de ${product.stock}.`);                          
                }
            }
        }); 
    }    
    return nuevoProducto1;
}

const agregarProducto = () => {    
    let tipoVehic = prompt("Ingrese el número del tipo de vehículo\n1 - Moto\n2 - Auto\n3 - Camioneta\n4 - Camion");
    if (validarValor(tipoVehic)) {
        let tipoVehiculo = asignarTipo(parseInt(tipoVehic));
        if ((tipoVehic > 0) && (tipoVehic < 5)) {
            let modeloCubierta = prompt("Ingrese el modelo de cubierta.").toUpperCase();
            let marca = prompt("Ingrese la marca de la cubierta.").toLowerCase();
            if (listaProductos.some(producto => (producto.modeloCubierta == modeloCubierta && producto.marca == marca))) {   
                agregarStock(modeloCubierta, marca);         
            } else {    
                alert(`Es un producto nuevo.`);   
                let stock = agregarStock(modeloCubierta, marca);             
                let precio = nuevoPrecio (modeloCubierta, marca);           
                let prodNuevo = new Producto(tipoVehiculo, modeloCubierta, marca, precio, stock);
                listaProductos.push(prodNuevo);
            }
        }
    }
    return listaProductos;
};

const vender = (modeloCubierta, marca) => {  
    listaProductos.forEach(product => {
        if (product.modeloCubierta == modeloCubierta && product.marca == marca){           
            let ventaProducto = prompt(`Modelo: ${product.modeloCubierta}\nMarca: ${product.marca}\nStock: ${product.stock}.\n¿Cuántas deseas vender?`);  
            if (validarValor(ventaProducto)) {   
                ventaProducto = parseInt(ventaProducto);
                if ((product.stock - ventaProducto) < 0) {
                    if (product.stock > 1) {
                        alert(`No hay stock suficiente para concretar la venta, solo hay ${product.stock} unidades disponibles. Por favor, ingrese una nueva cantidad (menor o igual a ${product.stock}).`); 
                    } else if (product.stock == 1 ) {
                        alert(`No hay stock suficiente para concretar la venta, solo hay 1 unidad disponible para la venta.`);
                    } else {
                        alert(`No hay stock del producto. Por favor, asegúrese de agregar unidades.`); 
                    }
                } else if ((product.stock - ventaProducto) == 0) {
                    product.stock -= ventaProducto;
                    if (ventaProducto == 1) {
                        alert(`¡Se descontó 1 unidad!`); 
                    } else {
                        alert(`¡Se descontaron ${ventaProducto} unidades!`); 
                    }
                    alert(`No hay stock del producto. Por favor, asegúrese de agregar unidades.`);      
                } else if ((product.stock - ventaProducto) == 1) {
                    product.stock -= ventaProducto;
                    if (ventaProducto == 1) {
                        alert(`¡Se descontó 1 unidad!`); 
                    } else {
                        alert(`¡Se descontaron ${ventaProducto} unidades!`); 
                    }
                    alert(`Hay poco stock, solo queda 1 unidad disponible.`);         
                } else if ((product.stock - ventaProducto) < 10) {
                    product.stock -= ventaProducto;
                    alert(`¡Se descontaron ${ventaProducto} unidades!`); 
                    if (product.stock > 0) {
                        alert(`Hay poco stock, solo quedan ${product.stock} unidades disponibles.`); 
                    } else {
                        alert(`No hay stock del producto. Por favor, asegúrese de agregar unidades.`); 
                    }
                } else {
                    product.stock -= ventaProducto;
                    alert(`¡Se descontaron ${ventaProducto} unidades!`);
                    alert(`Hay ${product.stock} unidades disponibles.`); 
                }
            } 
        } 
    }); 
    return listaProductos;
}

const ventaProducto = () => {  
    let modelo = prompt(`¿Qué modelo de cubierta es?`);  
    let marca = prompt(`¿Qué marca es?`);  

    if (listaProductos.some(producto => (producto.modeloCubierta == modelo && producto.marca == marca))) {   
        vender(modelo, marca);         
    } else {    
        alert(`El producto no se encuentra en la lista.`);   
    }  
    return listaProductos;
}

const stockProducto = (modeloCubierta, marca) => {  
    listaProductos.forEach(product => {
        if (product.modeloCubierta == modeloCubierta && product.marca == marca) {
            if (product.stock == 0) {
                alert(`Modelo: ${product.modeloCubierta}\nMarca: ${product.marca}\nStock: No hay unidades disponibles.`);
            } else if (product.stock < 10) {
                alert(`Modelo: ${product.modeloCubierta}\nMarca: ${product.marca}\nStock: Solo quedan ${product.stock} unidades disponibles. Asegúrese de reponer.`);
            } else {
                alert(`Modelo: ${product.modeloCubierta}\nMarca: ${product.marca}\nStock: Hay ${product.stock} unidades disponibles.`);               
            }  
        } 
    });
    return listaProductos;
}

const consultaStock = () => { 
    let modelo = prompt(`¿Qué modelo de cubierta es?`);  
    let marca = prompt(`¿Qué marca es?`);  
    if (listaProductos.some(producto => (producto.modeloCubierta == modelo && producto.marca == marca))) {   
        stockProducto(modelo, marca);         
    } else {    
        alert(`El producto no se encuentra en la lista.`);   
    }   
    return listaProductos;
}

const listaProd = () => { 
    listaProductos.forEach(product => {
        console.log(`Vehículo: ${product.tipoVehiculo}\nModelo: ${product.modeloCubierta}\nMarca: ${product.marca}\nStock: ${product.stock}\nPrecio por unidad:${product.precio} `);
    });          
    return listaProductos;
}

const precio = (modeloCubierta, marca) => { 
    listaProductos.forEach(product => {
        if (product.modeloCubierta == modeloCubierta && product.marca == marca) {          
            alert(`Modelo: ${product.modeloCubierta}\nMarca: ${product.marca}\nPrecio por unidad: $${product.precio}`);            
        } 
    });
    return listaProductos;
}

const consultaPrecio = () => { 
    let modelo = prompt(`¿Qué modelo de cubierta es?`);  
    let marca = prompt(`¿Qué marca es?`);  
    if (listaProductos.some(producto => (producto.modeloCubierta == modelo && producto.marca == marca))) {   
        precio(modelo, marca);         
    } else {    
        alert(`El producto no se encuentra en la lista.`);   
    }   
    return listaProductos;
}

const nuevoPrecio = (modeloCubierta, marca) => { 
    let valorProducto = prompt(`¿Cuál es el precio por unidad?`);
    if (validarValor(valorProducto)) {
        valorProducto = parseFloat(valorProducto);
        if (valorProducto < 0){
            alert(`Por favor, ingrese un valor mayor a cero.`)
        } else {
            listaProductos.forEach(product => {
            if (product.modeloCubierta == modeloCubierta && product.marca == marca) {   
                product.precio = valorProducto;
                alert(`Modelo: ${product.modeloCubierta}\nMarca: ${product.marca}\nPrecio por unidad: $${product.precio}`);            
            } 
            });
        } 
        return valorProducto;
    }       
    return valorProducto;
}

const cambiarPrecio = () => { 
    let modelo = prompt(`¿Qué modelo de cubierta es?`);  
    let marca = prompt(`¿Qué marca es?`);  
    if (listaProductos.some(producto => (producto.modeloCubierta == modelo && producto.marca == marca))) {   
        nuevoPrecio(modelo, marca);         
    } else {    
        alert(`El producto no se encuentra en la lista.`);   
    }   
    return listaProductos;
}

const filtroModelo = () => { 
    let modeloUsuario = prompt(`¿Qué modelo de cubierta queres filtrar?`);  
    if (listaProductos.some(producto => producto.modeloCubierta == modeloUsuario)) {   
        const filtraPorModelo = listaProductos.filter(producto => producto.modeloCubierta == modeloUsuario);
        console.log(filtraPorModelo);        
    } else {    
        alert(`El producto no se encuentra en la lista.`);   
    }      
    return listaProductos ;
}

const decision = (accionProducto) => { 
    switch (accionProducto) {
        case 1:
            agregarProducto();
            break;
        case 2:
            ventaProducto();
            break;
        case 3:
            consultaStock();            
            break; 
        case 4:
            listaProd();            
            break;
        case 5:
            consultaPrecio();            
        break;
        case 6:
            cambiarPrecio();            
        break;    
        case 7:
            filtroModelo();
            break; 
        default:            
            break;
    }   
    return accionProducto;
}

let accionProducto = 0;

let pass = "1";

let dato = prompt("Ingrese la clave de su sistema de control de stock.");

let acceso = 0;

for (let intentos = 0; intentos <3; intentos++) {
    if (dato === pass) {
        acceso = 1;
        intentos = 3;
    } else {
        acceso = 0;
        alert("Clave incorrecta.");
        dato = prompt("¿Cuál es la clave?");
    }
}

if (acceso == 1) {
    do {
        accionProducto = parseInt(prompt("Ingrese el número de lo que desea realizar\n1 - Ingresar producto\n2 - Vender producto\n3 - Consultar stock\n4 - Lista de productos\n5 - Consultar precio\n6 - Cambiar precio\n7 - Filtrar por modelo\n0 - Salir"));
        decision(accionProducto);    
    } while (accionProducto);
} else {
    alert("No se pudo iniciar seción correcamtente. Si olvidó su contraseña contáctese con el administrador del sitio.");
}