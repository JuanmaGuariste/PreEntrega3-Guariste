/*-----------------------Agregar producto------------------------*/
const cuerpoDelDocumento = document.body;
const formNuevoProducto = document.getElementById("formNuevoProducto");
const modeloNuevoProducto = document.getElementById?.("modeloNuevoProducto");
const marcaNuevoProducto = document.getElementById("marcaNuevoProducto");
const btnAgregarProducto = document.getElementById("btnAgregarProducto");
const primerVentana = document.getElementById("primerVentana");
const segundaVentana = document.getElementById("segundaVentana");
const stockNuevoProducto = document.getElementById("stockNuevoProducto");
const precioNuevoProducto = document.getElementById("precioNuevoProducto");
const btnAgregarProductoNuevo = document.getElementById("btnAgregarProductoNuevo");
const btnReset = document.getElementById("btnReset");
const btnResetProdAgregado = document.getElementById("btnResetProdAgregado");
const btnRstProducto = document.getElementById("btnRstProducto");
const tercerVentana = document.getElementById("tercerVentana");
const divTercerVentana = document.getElementById("divTercerVentana");

/*--------------------Ventas---------------------------------------*/
const primerVentanaVentas = document.getElementById("primerVentanaVentas");
const segundaVentanaVentas = document.getElementById("segundaVentanaVentas");
const modeloProductoVenta = document.getElementById("modeloProductoVenta");
const marcaProductoVenta = document.getElementById("marcaProductoVenta");
const stockParaVentas = document.getElementById("stockParaVentas");
const cantidadVendida = document.getElementById("cantidadVendida");
const btnVenderProducto = document.getElementById("btnVenderProducto");
const rstVentas = document.getElementById("rstVentas");
const formVentas = document.getElementById("formVentas");
const btnCantidadProducto = document.getElementById("btnCantidadProducto");
const tituloAgregarVenta = document.getElementById("tituloAgregarVenta");
const tercerVentanaVentas = document.getElementById("tercerVentanaVentas");
const tituloSinStock = document.getElementById("tituloSinStock");
const btnResetVentas = document.getElementById("btnResetVentas");
const cuartaVentanaVentas = document.getElementById("cuartaVentanaVentas");
const tituloVendido = document.getElementById("tituloVendido");
const parrafoVendido = document.getElementById("parrafoVendido");
const btnResetVendido = document.getElementById("btnResetVendido");

/*--------------------Cambio de precios---------------------------------------*/
const bodyCambioPrecios = document.getElementById("bodyCambioPrecios");
const formCambioPrecios = document.getElementById("formCambioPrecios");
const primerVentanaCambio = document.getElementById("primerVentanaCambio");
const modeloProductoCambio = document.getElementById("modeloProductoCambio");
const marcaProductoCambio = document.getElementById("marcaProductoCambio");
const nuevoPrecio = document.getElementById("nuevoPrecio");
const btnCambiarPrecio = document.getElementById("btnCambiarPrecio");
const rstCambioPrecio = document.getElementById("rstCambioPrecio");
const segundaVentanaCambio = document.getElementById("segundaVentanaCambio");
const tituloCambioPrecios = document.getElementById("tituloCambioPrecios");
const parrafoCambioPrecios = document.getElementById("parrafoCambioPrecios");
const btnResetCambioPrecio = document.getElementById("btnResetCambioPrecio");

/*--------------------Consulta Stock---------------------------------------*/
const bodyConsultaStock = document.getElementById("bodyConsultaStock");
const formConsultaStock = document.getElementById("formConsultaStock");
const primerVentanaConsultaStock = document.getElementById("primerVentanaConsultaStock");
const modeloProductoConsultaStock = document.getElementById("modeloProductoConsultaStock");
const marcaProductoConsultaStock = document.getElementById("marcaProductoConsultaStock");
const btnConsultaStock = document.getElementById("btnConsultaStock");
const rstConsultaStock = document.getElementById("rstConsultaStock");
const segundaVentanaConsultaStock = document.getElementById("segundaVentanaConsultaStock");
const tituloConsultaStock = document.getElementById("tituloConsultaStock");
const parrafoConsultaStock = document.getElementById("parrafoConsultaStock");
const btnResetConsultaStock = document.getElementById("btnResetConsultaStock");

/*--------------------Lista de productos---------------------------------------*/
const bodyListaProductos= document.getElementById("bodyListaProductos");
const productos = document.getElementById("productos");

/*----------------Lista de productos--------------------------*/
const listaProd = () => { 
    const productosGuardados = JSON.parse(localStorage.getItem("listaProducto")) || listaProductosDefault;
    productosGuardados.forEach(product => {
        productos.innerHTML += `<tr>
                                    <td>${product.modeloCubierta}</td>
                                    <td>${product.marca}</td>
                                    <td>${product.stock}</td>
                                    <td>$${product.precio}</td>  
                                </tr>`    
    });          
    return listaProductos;
}

/*----------------Funciones y variables generales--------------------------*/
class Producto {
    constructor(modeloCubierta, marca, precio, stock) {
        this.modeloCubierta = modeloCubierta;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;         
    }
};

const productoProvisorio = {
    modeloCubierta: "",
    marca: "Pirelli",
    precio: -1,
    stock: -1,
    nuevo: -1,
};

let listaProductosDefault = [
    {
    modeloCubierta: "1757013",
    marca: "Fate",
    precio: 45000,
    stock:  50
    },
    {
    modeloCubierta: "1955515",
    marca: "Pirelli",
    precio: 65000,
    stock:  30
    },
    {
    modeloCubierta: "909018",
    marca: "Fate",
    precio: 20000,
    stock:  100
    },
];

let listaProductos = JSON.parse(localStorage.getItem("listaProducto")) || listaProductosDefault;

/*----------------Funciones para página "Lista de productos"--------------------------*/
const agregarStock = (productoProvisorio) => { 
    if(productoProvisorio.nuevo == 0) {
    listaProductos.forEach(product => {  
        if (product.modeloCubierta == productoProvisorio.modeloCubierta && product.marca == productoProvisorio.marca) {           
            product.stock+= productoProvisorio.stock; 
            primerVentana.style.display = "none";
            segundaVentana.style.display = "none";
            tercerVentana.style.display = "inline";
            modeloNuevoProducto.style.display = "none"; 
            marcaNuevoProducto.style.display = "none"; 
            stockNuevoProducto.style.display = "none"; 
            btnAgregarProducto.style.display = "none"; 
            btnRstProducto.style.display = "none";   
            btnResetProdAgregado.style.display = "inline"; 
            divTercerVentana.innerHTML = `<p>Modelo: ${product.modeloCubierta}</p>
                                <p>Marca: ${product.marca}</p>
                                <p>Stock adicionado: ${productoProvisorio.stock}</p>
                                <p>Stock total: ${product.stock}</p>
                                <p>Precio por unidad: $${product.precio}</p>`
        }
        localStorage.setItem("listaProducto", JSON.stringify(listaProductos)); 
    });                     
    } else if(productoProvisorio.nuevo == 1) {
        primerVentana.style.display = "none";
        segundaVentana.style.display = "inline";
        tercerVentana.style.display = "none";
        precioNuevoProducto.style.display = "inline";
        btnAgregarProductoNuevo.style.display = "inline";
        btnReset.style.display = "inline";       
    }      
    return productoProvisorio;
};

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

const rstProductoProvisorio = () => {
    productoProvisorio.modeloCubierta= "";
    productoProvisorio.marca= "Pirelli";
    productoProvisorio.precio= -1;
    productoProvisorio.stock= -1;
    productoProvisorio.nuevo= -1;
    return productoProvisorio;
};

/*----------------Funciones para página "Cambio de precios"--------------------------*/
const cambioPrecio = () => {
    listaProductos.forEach(product => {
        if (product.modeloCubierta == productoProvisorio.modeloCubierta && product.marca == productoProvisorio.marca) {   
            product.precio =  productoProvisorio.precio;
            tituloCambioPrecios.innerText = `Cambio de Precio`;
            localStorage.setItem("listaProducto", JSON.stringify(listaProductos)); 
            mostrarCambioPrecio();
            rstProductoProvisorio();
            formCambioPrecios.reset();
        } 
    });
    return productoProvisorio;
};

const mostrarCambioPrecio = () => {
    primerVentanaCambio.style.display = "none";
    segundaVentanaCambio.style.display = "inline";
    parrafoCambioPrecios.innerText = `Modelo: ${productoProvisorio.modeloCubierta}\nMarca: ${productoProvisorio.marca}\nNuevo precio por unidad: $${productoProvisorio.precio}`; 
    return productoProvisorio;
};

const productoNoExiste = () => {
    primerVentanaCambio.style.display = "none";
    segundaVentanaCambio.style.display = "inline";
    parrafoCambioPrecios.innerText = `El producto no está agregado.\n Modelo: ${productoProvisorio.modeloCubierta}\nMarca: ${productoProvisorio.marca}`; 
    tituloCambioPrecios.innerText = `Producto sin stock`;
    return productoProvisorio;
};

/*----------------Funciones para página "Consultar stock"--------------------------*/
const consultarStock = () => {
    listaProductos.forEach(product => {
        if (product.modeloCubierta == productoProvisorio.modeloCubierta && product.marca == productoProvisorio.marca) {   
            primerVentanaConsultaStock.style.display = "none";
            segundaVentanaConsultaStock.style.display = "inline";
            tituloConsultaStock.innerText = `Stock actual`;
            parrafoConsultaStock.innerText = `Modelo: ${product.modeloCubierta}\nMarca: ${product.marca}\nStock actual: ${product.stock}\nPrecio por unidad: $${product.precio}`;            
        } 
    });
    rstProductoProvisorio();
    formConsultaStock.reset();
    return productoProvisorio;
};

const mostrarSinStock = () => {
    primerVentanaConsultaStock.style.display = "none";
    segundaVentanaConsultaStock.style.display = "inline";
    parrafoConsultaStock.innerText = `El producto no está agregado.\n Modelo: ${productoProvisorio.modeloCubierta}\nMarca: ${productoProvisorio.marca}`; 
    tituloConsultaStock.innerText = `Producto sin stock`;
    rstProductoProvisorio();
    formConsultaStock.reset();
    return productoProvisorio;
};

/*----------------App para control de DOM--------------------------*/
const app = {
    inicio: () => {
        document.addEventListener(`DOMContentLoaded`, app.cargar);
    },

    cargar: () => {
        app.obtenerPagina();
    }, 

    obtenerPagina: () => {
        let page = document.body.id;
        switch (page) {
            case `bodyAgregarProducto`:
                app.paginaAgregarProd();
                break;
            case `bodyListaProductos`:
                app.paginaListaProductos();
                break;            
            case `bodyVentas`:
                app.paginaVentas();
                break;
            case `bodyCambioPrecios`:
                app.paginaCambioPrecios();
                break;
            case `bodyConsultaStock`:
                app.paginaConsultaStock();
                break;    
            default:
                break;
        }
    },

    /*----------------Pagina: Agregar producto--------------------------*/
    paginaAgregarProd: () => {
        cuerpoDelDocumento.onload = initing;

        function initing() {
            segundaVentana.style.display = "none";
            tercerVentana.style.display = "none";
            btnResetProdAgregado.style.display = "none";    
            rstProductoProvisorio();
        };

        modeloNuevoProducto.onchange= () => {
            productoProvisorio.modeloCubierta = modeloNuevoProducto.value;
        };

        marcaNuevoProducto.onchange= () => {
            productoProvisorio.marca = marcaNuevoProducto.value;
        }; 

        btnAgregarProducto.onclick = () => {
            if (productoProvisorio.modeloCubierta == "" && productoProvisorio.stock <= 0) {
                modeloNuevoProducto.setAttribute("class", "inputError");
                stockNuevoProducto.setAttribute("class", "inputError");
            } else if (productoProvisorio.modeloCubierta == "") {        
                modeloNuevoProducto.setAttribute("class", "inputError");
                stockNuevoProducto.setAttribute("class", "boton");
            } else if (productoProvisorio.stock <= 0) {
                modeloNuevoProducto.setAttribute("class", "boton");
                stockNuevoProducto.setAttribute("class", "inputError");
            } else {
                stockNuevoProducto.setAttribute("class", "boton");
                modeloNuevoProducto.setAttribute("class", "boton");
                agregarProducto(productoProvisorio);
            }  
            return productoProvisorio;          
        };

        stockNuevoProducto.onchange= () => {
            productoProvisorio.stock = parseInt(stockNuevoProducto.value);
        };

        precioNuevoProducto.onchange = () => {
            productoProvisorio.precio = parseFloat(precioNuevoProducto.value);
        };

        btnAgregarProductoNuevo.onclick = () => {
            if (productoProvisorio.precio < 0) {
                precioNuevoProducto.setAttribute("class", "inputError");
            } else {
                precioNuevoProducto.setAttribute("class", "boton");
                primerVentana.style.display = "none";
                segundaVentana.style.display = "none";
                tercerVentana.style.display = "inline";
                precioNuevoProducto.style.display = "none";
                btnAgregarProductoNuevo.style.display = "none";
                btnReset.style.display = "none";
                btnResetProdAgregado.style.display = "inline"; 
                let prodNuevo = new Producto(productoProvisorio.modeloCubierta, productoProvisorio.marca, productoProvisorio.precio, productoProvisorio.stock);                
                listaProductos.push(prodNuevo); 
                localStorage.setItem("listaProducto", JSON.stringify(listaProductos));                 
                divTercerVentana.innerHTML = `<p>Modelo: ${productoProvisorio.modeloCubierta}</p>
                                            <p>Marca: ${productoProvisorio.marca}</p>
                                            <p>Stock adicionado: ${productoProvisorio.stock}</p>
                                            <p>Precio por unidad: $${productoProvisorio.precio}</p>`
            }
            return productoProvisorio;
        };

        btnRstProducto.onclick = () => {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Producto descartado',
                showConfirmButton: false,
                timer: 1500
            });
            primerVentana.style.display = "inline";
            segundaVentana.style.display = "none";
            modeloNuevoProducto.setAttribute("class", "boton");
            stockNuevoProducto.setAttribute("class", "boton");
            formNuevoProducto.reset();
            rstProductoProvisorio();
            return productoProvisorio;
        };

        btnResetProdAgregado.onclick = () => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu producto ha sido guardado',
                showConfirmButton: false,
                timer: 1500
            });
            primerVentana.style.display = 'inline'; 
            tercerVentana.style.display = 'none'; 
            modeloNuevoProducto.style.display = "inline";
            marcaNuevoProducto.style.display = "inline";
            stockNuevoProducto.style.display = "inline";
            btnAgregarProducto.style.display = "inline";
            btnRstProducto.style.display = "inline";
            btnResetProdAgregado.style.display = "none"; 
            segundaVentana.style.display = "none";
            formNuevoProducto.reset(); 
            rstProductoProvisorio();  
            return productoProvisorio;
        };

        btnReset.onclick = () => {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Producto descartado',
                showConfirmButton: false,
                timer: 1500
            });
            primerVentana.style.display = "inline";
            segundaVentana.style.display = "none";
            formNuevoProducto.reset();
            return productoProvisorio;
        };   
    },  

    /*----------------Pagina: Lista de productos--------------------------*/
    paginaListaProductos: () => {
        listaProd(); 
    },

    /*----------------Pagina: Ventas--------------------------*/
    paginaVentas: () => {
        cuerpoDelDocumento.onload = initing;

        function initing() {
            segundaVentanaVentas.style.display = "none";
            tercerVentanaVentas.style.display = "none";
            cuartaVentanaVentas.style.display = "none";
            rstProductoProvisorio();
        }

        modeloProductoVenta.onchange= () => {
            productoProvisorio.modeloCubierta = modeloProductoVenta.value;
        };

        marcaProductoVenta.onchange= () => {
            productoProvisorio.marca = marcaProductoVenta.value;
        }; 

        cantidadVendida.onchange= () => {
            productoProvisorio.stock = parseInt(cantidadVendida.value);
        };

        btnVenderProducto.onclick = () => {
            if (productoProvisorio.stock <= 0) {
                cantidadVendida.setAttribute("class", "inputError");
            } else {  
                cantidadVendida.setAttribute("class", "boton");          
                segundaVentanaVentas.style.display = "none";
                cuartaVentanaVentas.style.display = "inline";                
                tituloVendido.style.display = "block";
                parrafoVendido.style.display = "block";
                btnResetVendido.style.display = "block";
                btnResetVentas.style.display = "none";
                listaProductos.forEach(product => {  
                    if (product.modeloCubierta == productoProvisorio.modeloCubierta && product.marca == productoProvisorio.marca) {   
                        if ((product.stock - productoProvisorio.stock) == 0) {
                            product.stock -= productoProvisorio.stock;                       
                            if (productoProvisorio.stock == 1) {
                                parrafoVendido.innerText=`¡Se descontó 1 unidad!\n`; 
                            } else {
                                parrafoVendido.innerText=`¡Se descontaron ${productoProvisorio.stock} unidades!\n`; 
                            }
                            tituloVendido.innerText= `Producto vendido`;
                            parrafoVendido.innerText +=`No hay stock del producto. Por favor, asegúrese de agregar unidades.`;      
                        } else if ((product.stock - productoProvisorio.stock) == 1) {
                            product.stock -= productoProvisorio.stock;
                            if (productoProvisorio.stock == 1) {
                                parrafoVendido.innerText= `¡Se descontó 1 unidad!`; 
                            } else {
                                parrafoVendido.innerText= `¡Se descontaron ${productoProvisorio.stock} unidades!`; 
                            }
                            tituloVendido.innerText= `Producto vendido`;
                            parrafoVendido.innerText= `Hay poco stock, solo queda 1 unidad disponible.`;         
                        } else if (((product.stock - productoProvisorio.stock) <= 10) && ((product.stock - productoProvisorio.stock) >= 0)) {
                            product.stock -= productoProvisorio.stock;
                            parrafoVendido.innerText= `¡Se descontaron ${productoProvisorio.stock} unidades!`; 
                            if (product.stock > 0) {
                                parrafoVendido.innerText= `Hay poco stock, solo quedan ${product.stock} unidades disponibles.`; 
                            } else {
                                parrafoVendido.innerText= `No hay stock del producto. Por favor, asegúrese de agregar unidades.`; 
                            }
                        } else if (product.stock - productoProvisorio.stock > 10){
                            product.stock -= productoProvisorio.stock;
                            parrafoVendido.innerText= `¡Se descontaron ${productoProvisorio.stock} unidades!`;
                            parrafoVendido.innerText= `Hay ${product.stock} unidades disponibles.`; 
                        } else {
                            if (product.stock == 1) {
                                parrafoVendido.innerText=  `No se pudo concretar la venta. Solo hay  1 unidad disponible.`;
                            } else if (product.stock == 0){
                                parrafoVendido.innerText=  `No se pudo concretar la venta. No hay unidades disponibles.`;
                            } else {
                                parrafoVendido.innerText=  `No se pudo concretar la venta. Solo hay  ${product.stock} unidades disponibles.`;
                            }
                            tituloVendido.innerText= `Venta incompleta!`;
                        }
                    }
                });
                localStorage.setItem("listaProducto", JSON.stringify(listaProductos)); 
                rstProductoProvisorio();
                formVentas.reset();
            }
            return productoProvisorio;
        };  

        btnCantidadProducto.onclick = () => {
            if (productoProvisorio.modeloCubierta <= 0) {
                modeloProductoVenta.setAttribute("class", "inputError");
            } else {
                modeloProductoVenta.setAttribute("class", "boton")
                listaProductos.forEach(product => {
                    if (product.modeloCubierta == productoProvisorio.modeloCubierta && product.marca == productoProvisorio.marca) {  
                        primerVentanaVentas.style.display = "none";
                        segundaVentanaVentas.style.display = "inline";
                        tituloSinStock.style.display = "none";                        
                    } else {                                           
                        primerVentanaVentas.style.display = "none";
                        tercerVentanaVentas.style.display = "inline";
                        btnResetVentas.style.display = "block";
                    }
                }); 
            } 
            return productoProvisorio;       
        };

        btnResetVentas.onclick = () => {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Venta descartada',
                showConfirmButton: false,
                timer: 1500
            });
            primerVentanaVentas.style.display = 'inline'; 
            segundaVentanaVentas.style.display = 'none'; 
            tercerVentanaVentas.style.display = 'none'; 
            formVentas.reset(); 
            rstProductoProvisorio();  
            return productoProvisorio;
        };
                
        btnResetVendido.onclick = () => {   
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto vendido',
                showConfirmButton: false,
                timer: 1500
            });
            primerVentanaVentas.style.display = 'inline'; 
            tituloVendido.style.display = 'none'; 
            parrafoVendido.style.display = "none";
            btnResetVendido.style.display = "none";
            formVentas.reset(); 
            rstProductoProvisorio();  
            return productoProvisorio;
        }; 
        rstVentas.onclick = () => {  
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Venta descartada',
                showConfirmButton: false,
                timer: 1500
            }); 
            formVentas.reset(); 
            rstProductoProvisorio();  
            return productoProvisorio;
        };
    },

    /*----------------Pagina: Cambio de precios--------------------------*/
    paginaCambioPrecios: () => {
        cuerpoDelDocumento.onload = initing;

        function initing() {
            segundaVentanaCambio.style.display = "none";
            rstProductoProvisorio();
        }

        modeloProductoCambio.onchange= () => {
            productoProvisorio.modeloCubierta = modeloProductoCambio.value;
        };

        marcaProductoCambio.onchange= () => {
            productoProvisorio.marca = marcaProductoCambio.value;
        }; 

        nuevoPrecio.onchange= () => {
            productoProvisorio.precio = parseInt(nuevoPrecio.value);
        };

        btnCambiarPrecio.onclick = () => {
            if (productoProvisorio.modeloCubierta == "" && productoProvisorio.precio <= 0) {
                modeloProductoCambio.setAttribute("class", "inputError");
                nuevoPrecio.setAttribute("class", "inputError");
            } else if (productoProvisorio.modeloCubierta == "") {        
                modeloProductoCambio.setAttribute("class", "inputError");
                nuevoPrecio.setAttribute("class", "boton");
            } else if (productoProvisorio.precio <= 0) {
                modeloProductoCambio.setAttribute("class", "boton");
                nuevoPrecio.setAttribute("class", "inputError");
            } else {
                modeloProductoCambio.setAttribute("class", "boton");
                nuevoPrecio.setAttribute("class", "boton");
                if (listaProductos.some(producto => (producto.modeloCubierta == productoProvisorio.modeloCubierta  && producto.marca == productoProvisorio.marca))) {   
                    cambioPrecio();         
                } else {    
                    productoNoExiste();   
                }                
            }     
            return productoProvisorio;        
        };

        btnResetCambioPrecio.onclick = () => {   
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Cambio de precio realizado',
                showConfirmButton: false,
                timer: 1500
            });
            primerVentanaCambio.style.display = 'inline'; 
            segundaVentanaCambio.style.display = 'none'; 
            formCambioPrecios.reset(); 
            rstProductoProvisorio();  
            return productoProvisorio;
        };

        rstCambioPrecio.onclick = () => {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Cambio de precio descartado',
                showConfirmButton: false,
                timer: 1500
            });
            formCambioPrecios.reset(); 
            rstProductoProvisorio();  
            return productoProvisorio;
        };
    },

    /*----------------Pagina: Consultar stock--------------------------*/
    paginaConsultaStock: () => {
        cuerpoDelDocumento.onload = initing;

        function initing() {
            segundaVentanaConsultaStock.style.display = "none";
            rstProductoProvisorio();
        }

        modeloProductoConsultaStock.onchange= () => {
            productoProvisorio.modeloCubierta = modeloProductoConsultaStock.value;
        };

        marcaProductoConsultaStock.onchange= () => {
            productoProvisorio.marca = marcaProductoConsultaStock.value;
        }; 

        btnConsultaStock.onclick = () => {
            if (productoProvisorio.modeloCubierta == "") {
                modeloProductoConsultaStock.setAttribute("class", "inputError");            
            } else {
                modeloProductoConsultaStock.setAttribute("class", "boton"); 
                if (listaProductos.some(producto => (producto.modeloCubierta == productoProvisorio.modeloCubierta  && producto.marca == productoProvisorio.marca))) {   
                    consultarStock();         
                } else {    
                    mostrarSinStock();   
                }                
            }  
            return productoProvisorio;           
        };

        rstConsultaStock.onclick = () => {   
            primerVentanaConsultaStock.style.display = 'inline'; 
            segundaVentanaConsultaStock.style.display = 'none';
            formConsultaStock.reset(); 
            rstProductoProvisorio();  
            return productoProvisorio;
        };

        btnResetConsultaStock.onclick = () => {   
            primerVentanaConsultaStock.style.display = 'inline'; 
            segundaVentanaConsultaStock.style.display = 'none'; 
            formConsultaStock.reset(); 
            rstProductoProvisorio();  
            return productoProvisorio;
        };
    }, 
};

app.inicio();