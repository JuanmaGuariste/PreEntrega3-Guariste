const cuerpoDelDocumento = document.body;
const formNuevoProducto = document.getElementById("formNuevoProducto");
const vehiculoNuevoProducto = document.getElementById("vehiculo");
const modeloNuevoProducto = document.getElementById("modeloNuevoProducto");
const marcaNuevoProducto = document.getElementById("marcaNuevoProducto");
const btnAgregarProducto = document.getElementById("btnAgregarProducto");
const primerVentana = document.getElementById("primerVentana");
const segundaVentana = document.getElementById("segundaVentana");
const stockNuevoProducto = document.getElementById("stockNuevoProducto");
const precioNuevoProducto = document.getElementById("precioNuevoProducto");
const btnAgregarProductoNuevo = document.getElementById("btnAgregarProductoNuevo");
const btnProductoAgregado = document.getElementById("btnProductoAgregado");
const btnReset = document.getElementById("btnReset");
const tercerVentana = document.getElementById("tercerVentana");
const tituloPrecioProd = document.getElementById("tituloPrecioProd");
const btnResetProdAgregado = document.getElementById("btnResetProdAgregado");
const btnRstProducto = document.getElementById("btnRstProducto");
const tituloProductoNuevo = document.getElementById("tituloProductoNuevo");
const vehiculo = document.getElementById("vehiculo");


const currentHTML = document.getElementById('primerVentana').innerHTML;





let accionProducto = 0;
let pass = "1";
//let dato = prompt("Ingrese la clave de su sistema de control de stock.");
let acceso = 0;

class Producto {
    constructor(tipoVehiculo, modeloCubierta, marca, precio, stock) {
        this.tipoVehiculo = tipoVehiculo;
        this.modeloCubierta = modeloCubierta;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;         
    }
}

const productoProvisorio = {
    tipoVehiculo: "Auto",
    modeloCubierta: "",
    marca: "Pirelli",
    precio: -1,
    stock: -1,
    nuevo: -1,
}

let listaProductos = [
    {tipoVehiculo: "Auto",
    modeloCubierta: "1757013",
    marca: "Fate",
    precio: 45000,
    stock:  50
    },
    {tipoVehiculo: "Camioneta",
    modeloCubierta: "1955515",
    marca: "Pirelli",
    precio: 65000,
    stock:  30
    },
    {tipoVehiculo: "Moto",
    modeloCubierta: "909018",
    marca: "Pirelli",
    precio: 20000,
    stock:  100
    },
];

cuerpoDelDocumento.onload = init;

function init() {
    segundaVentana.style.display = "none";
    btnResetProdAgregado.style.display = "none";
    rstProductoProvisorio();
}

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

const nuevoPrecio2 = (modeloCubierta, marca) => { 
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

const agregarStock = (productoProvisorio) => { 
    if(productoProvisorio.nuevo == 0){
    //primerVentana.style.display = "none"; 
    listaProductos.forEach(product => {  
        if (product.modeloCubierta == productoProvisorio.modeloCubierta && product.marca == productoProvisorio.marca) {           
            product.stock+= productoProvisorio.stock; 
            //primerVentana.style.display = "none";
            //segundaVentana.style.display = "inline";
            vehiculo.style.display = "none";
            tituloPrecioProd.style.display = "none"; 
            modeloNuevoProducto.style.display = "none"; 
            marcaNuevoProducto.style.display = "none"; 
            stockNuevoProducto.style.display = "none"; 
            btnAgregarProducto.style.display = "none"; 
            btnRstProducto.style.display = "none";    
            tituloProductoNuevo.innerHTML = `Producto agregado`
            //btnReset.style.display = "none"; 
            //btnAgregarProductoNuevo.style.display = "none";  
            btnResetProdAgregado.style.display = "inline"; 
            //precioNuevoProducto.setAttribute("class", "boton");            
            let noddo = document.createElement("div");            
            noddo.innerHTML = ` <p>Vehículo: ${product.tipoVehiculo}</p>
                                <p>Modelo: ${product.modeloCubierta}</p>
                                <p>Marca: ${product.marca}</p>
                                <p>Stock adicionado: ${productoProvisorio.stock}</p>
                                <p>Stock total: ${product.stock}</p>
                                <p>Precio por unidad: $${product.precio}</p>`
            primerVentana.appendChild(noddo);                                                
        }

    });                     
    } else if(productoProvisorio.nuevo == 1){
        primerVentana.style.display = "none";
        segundaVentana.style.display = "inline";
    }   
    // let nuevoProducto1 = prompt("¿Cuántos desea agregar?"); 
    // if (validarValor(nuevoProducto1)) {
    //     nuevoProducto1 = parseInt(nuevoProducto1);
    //     listaProductos.forEach(product => {  
    //         if (product.modeloCubierta == modeloCubierta && product.marca == marca) {
    //             if ((nuevoProducto1 <= 0) ) { 
    //                 alert(`Por favor, ingrese una cantidad mayor a cero.`);  
    //             } else if (nuevoProducto1 == 1) {
    //                 product.stock += nuevoProducto1;
    //                 alert(`Se agregó 1 unidad. El stock actual es de ${product.stock}.`);                         
    //             } else {
    //                 product.stock+= nuevoProducto1;
    //                 alert(`Se agregaron ${nuevoProducto1} unidades. El stock actual es de ${product.stock}.`);                          
    //             }
    //         }
    //     }); 
    // }    
    return productoProvisorio;
}

const agregarProducto = (productoProvisorio) => {   
    if (listaProductos.some(producto => (producto.modeloCubierta == productoProvisorio.modeloCubierta && producto.marca == productoProvisorio.marca))) {   
        productoProvisorio.nuevo = 0;
        agregarStock(productoProvisorio);         
    } else {  
        productoProvisorio.nuevo = 1;
        agregarStock(productoProvisorio);  
    }      
    return listaProductos;
};

vehiculoNuevoProducto.onchange = () => {
    productoProvisorio.tipoVehiculo = vehiculoNuevoProducto.value;    
};

//input
modeloNuevoProducto.onchange= () => {
    productoProvisorio.modeloCubierta = modeloNuevoProducto.value;
};

marcaNuevoProducto.onchange= () => {
    productoProvisorio.marca = marcaNuevoProducto.value;
};

// stockNuevoProducto.onchange= () => {
//     productoProvisorio.stock = stockNuevoProducto.value;
// };

// precioNuevoProducto.onchange= () => {
//     productoProvisorio.precio = precioNuevoProducto.value;
// };

const rstProductoProvisorio = () => {
    productoProvisorio.tipoVehiculo= "Auto";
    productoProvisorio.modeloCubierta= "";
    productoProvisorio.marca= "Pirelli";
    productoProvisorio.precio= -1;
    productoProvisorio.stock= -1;
    productoProvisorio.nuevo= -1;
    return productoProvisorio;
};



btnAgregarProducto.onclick = () => {
    if (productoProvisorio.modeloCubierta == "" && productoProvisorio.stock <= 0){
        modeloNuevoProducto.setAttribute("class", "inputError");
        stockNuevoProducto.setAttribute("class", "inputError");
    } else if (productoProvisorio.modeloCubierta == ""){        
        modeloNuevoProducto.setAttribute("class", "inputError");
        stockNuevoProducto.setAttribute("class", "boton");
    } else if (productoProvisorio.stock <= 0){
        modeloNuevoProducto.setAttribute("class", "boton");
        stockNuevoProducto.setAttribute("class", "inputError");
    } else {
        agregarProducto(productoProvisorio);
    }
    
};

stockNuevoProducto.onchange= () => {
    productoProvisorio.stock = parseInt(stockNuevoProducto.value);
};

precioNuevoProducto.onchange = () => {
    productoProvisorio.precio = parseFloat(precioNuevoProducto.value);
};

// btnAgregarProducto.onclick = () => {
//     agregarProducto(productoProvisorio);
// };

btnAgregarProductoNuevo.onclick = () => {
    if (productoProvisorio.precio < 0){
        precioNuevoProducto.setAttribute("class", "inputError");
    } else {
        primerVentana.style.display = "none";
        precioNuevoProducto.style.display = "none";
        tituloPrecioProd.style.display = "none"; 
        btnReset.style.display = "none"; 
        btnAgregarProductoNuevo.style.display = "none";  
        btnResetProdAgregado.style.display = "inline"; 
        precioNuevoProducto.setAttribute("class", "boton");
        let prodNuevo = new Producto(productoProvisorio.tipoVehiculo, productoProvisorio.modeloCubierta, productoProvisorio.marca, productoProvisorio.precio, productoProvisorio.stock);
        listaProductos.push(prodNuevo);
        let nodo = document.createElement("div");
        nodo.innerHTML = `<h2>Producto agregado</h2>
                            <p>Vehículo: ${productoProvisorio.tipoVehiculo}</p>
                            <p>Modelo: ${productoProvisorio.modeloCubierta}</p>
                            <p>Marca: ${productoProvisorio.marca}</p>
                            <p>Stock adicionado: ${productoProvisorio.stock}</p>
                            <p>Precio por unidad: $${productoProvisorio.precio}</p>`
        segundaVentana.appendChild(nodo);   
        //rstProductoProvisorio(); 
    }
};

btnRstProducto.onclick = () => {
    primerVentana.style.display = "inline";
    segundaVentana.style.display = "none";
    modeloNuevoProducto.setAttribute("class", "boton");
    stockNuevoProducto.setAttribute("class", "boton");
    formNuevoProducto.reset();
    rstProductoProvisorio();
    return productoProvisorio;
};



btnResetProdAgregado.onclick = () => {
    if(productoProvisorio.nuevo == 0){
        primerVentana.innerHTML = currentHTML;//El problema está aca, no restaura las propiedades.. Habria que volver todo a manopla
        btnResetProdAgregado.style.display = "none"; 
    } else if(productoProvisorio.nuevo == 1){
        primerVentana.style.display = "inline";
        segundaVentana.style.display = "none";
        btnResetProdAgregado.style.display = "none";
    }
    formNuevoProducto.reset(); 
    rstProductoProvisorio();  
    return productoProvisorio;
};

btnReset.onclick = () => {
    primerVentana.style.display = "inline";
    segundaVentana.style.display = "none";
    formNuevoProducto.reset();
    return productoProvisorio;
};



// btnProductoAgregado.onclick = () => {
//     primerVentana.style.display = "inline";
//     segundaVentana.style.display = "none";
//     tercerVentana.style.display = "none";
//     tercerVentana.innerHTML = `<h2>Producto agregado</h2>
//                                 <p>Modelo: ${productoProvisorio.modeloCubierta}</p>
//                                 <p>Marca: ${productoProvisorio.marca}</p>`
//     rstProductoProvisorio();
// }


// btnAgregarProductoNuevo.onclick = () => {
//     let prodNuevo = new Producto(productoProvisorio.tipoVehiculo, productoProvisorio.modeloCubierta, productoProvisorio.marca, productoProvisorio.precio, productoProvisorio.stock);
//     listaProductos.push(prodNuevo);
//     console.log(listaProductos);
// };


// const decision = (accionProducto) => { 
//     switch (accionProducto) {
//         case 1:
//             agregarProducto();
//             break;
//         case 2:
//             ventaProducto();
//             break;
//         case 3:
//             consultaStock();            
//             break; 
//         case 4:
//             listaProd();            
//             break;
//         case 5:
//             consultaPrecio();            
//         break;
//         case 6:
//             cambiarPrecio();            
//         break;    
//         case 7:
//             filtroModelo();
//             break; 
//         default:            
//             break;
//     }   
//     return accionProducto;
// }

// for (let intentos = 0; intentos <3; intentos++) {
//     if (dato === pass) {
//         acceso = 1;
//         intentos = 3;
//     } else {
//         acceso = 0;
//         alert("Clave incorrecta.");
//         dato = prompt("¿Cuál es la clave?");
//     }
// }

// if (acceso == 1) {
//     do {
//         accionProducto = parseInt(prompt("Ingrese el número de lo que desea realizar\n1 - Ingresar producto\n2 - Vender producto\n3 - Consultar stock\n4 - Lista de productos\n5 - Consultar precio\n6 - Cambiar precio\n7 - Filtrar por modelo\n0 - Salir"));
//         decision(accionProducto);    
//     } while (accionProducto);
// } else {
//     alert("No se pudo iniciar seción correcamtente. Si olvidó su contraseña contáctese con el administrador del sitio.");
// }