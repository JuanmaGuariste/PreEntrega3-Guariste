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
const vehiculo = document.getElementById("vehiculo");
const tercerVentana = document.getElementById("tercerVentana");
const divTercerVentana = document.getElementById("divTercerVentana");

/*-----------------------Agregar producto------------------------*/
const productos = document.getElementById("productos");


//let accionProducto = 0;
//let pass = "1";
//let dato = prompt("Ingrese la clave de su sistema de control de stock.");
//let acceso = 0;

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
            case `bodyIndex`:
                app.paginaIndex();
                break;
            default:
                break;
        }
    },

    paginaIndex: () => {
        console.log("Estoy en index js");
    },

    paginaAgregarProd: () => {
        cuerpoDelDocumento.onload = initing;

        function initing() {
            segundaVentana.style.display = "none";
            tercerVentana.style.display = "none";
            btnResetProdAgregado.style.display = "none";    
            rstProductoProvisorio();
        }

        modeloNuevoProducto.onchange= () => {
            productoProvisorio.modeloCubierta = modeloNuevoProducto.value;
        };

        marcaNuevoProducto.onchange= () => {
            productoProvisorio.marca = marcaNuevoProducto.value;
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

        btnAgregarProductoNuevo.onclick = () => {
            if (productoProvisorio.precio < 0){
                precioNuevoProducto.setAttribute("class", "inputError");
            } else {
                primerVentana.style.display = "none";
                segundaVentana.style.display = "none";
                tercerVentana.style.display = "inline";
                precioNuevoProducto.style.display = "none";
                btnAgregarProductoNuevo.style.display = "none";
                btnReset.style.display = "none";
                btnResetProdAgregado.style.display = "inline"; 
                let prodNuevo = new Producto(productoProvisorio.tipoVehiculo, productoProvisorio.modeloCubierta, productoProvisorio.marca, productoProvisorio.precio, productoProvisorio.stock);                
                listaProductos.push(prodNuevo); 
                localStorage.setItem("listaProducto", JSON.stringify(listaProductos));                 
                divTercerVentana.innerHTML = `<p>Vehículo: ${productoProvisorio.tipoVehiculo}</p>
                                            <p>Modelo: ${productoProvisorio.modeloCubierta}</p>
                                            <p>Marca: ${productoProvisorio.marca}</p>
                                            <p>Stock adicionado: ${productoProvisorio.stock}</p>
                                            <p>Precio por unidad: $${productoProvisorio.precio}</p>`
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
            primerVentana.style.display = 'inline'; 
            tercerVentana.style.display = 'none'; 
            vehiculo.style.display = "inline";
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
            primerVentana.style.display = "inline";
            segundaVentana.style.display = "none";
            formNuevoProducto.reset();
            return productoProvisorio;
        };   
    },   
    
    paginaListaProductos: () => {
        listaProd(); 
    },
}

app.inicio();

/*----------------Lista de productos--------------------------*/

const listaProd = () => { 
    const productosGuardados = JSON.parse(localStorage.getItem("listaProducto"));
    productosGuardados.forEach(product => {
        productos.innerHTML += `<tr>
                                    <td>${product.tipoVehiculo}</td>
                                    <td>${product.modeloCubierta}</td>
                                    <td>${product.marca}</td>
                                    <td>${product.stock}</td>
                                    <td>${product.precio}</td>  
                                </tr>                               
                            `




        // let nodo = productos.createElement("div");
        // nodo.innerHTML = `<p>${product.tipoVehiculo}</p>
        //                   <p>${product.modeloCubierta}</p>
        //                   <p>${product.marca}</p>
        //                   <p>${product.stock}</p>
        //                   <p>${product.precio}</p>`    
        // document.getElementById("productos").appendChild(nodo);        
    });          
    return listaProductos;
}

/*----------------Agrear productos--------------------------*/
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

let listaProductos = JSON.parse(localStorage.getItem("listaProducto")) || [
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

const agregarStock = (productoProvisorio) => { 
    if(productoProvisorio.nuevo == 0){
    listaProductos.forEach(product => {  
        if (product.modeloCubierta == productoProvisorio.modeloCubierta && product.marca == productoProvisorio.marca) {           
            product.stock+= productoProvisorio.stock; 
            primerVentana.style.display = "none";
            segundaVentana.style.display = "none";
            tercerVentana.style.display = "inline";
            vehiculo.style.display = "none";
            modeloNuevoProducto.style.display = "none"; 
            marcaNuevoProducto.style.display = "none"; 
            stockNuevoProducto.style.display = "none"; 
            btnAgregarProducto.style.display = "none"; 
            btnRstProducto.style.display = "none";   
            btnResetProdAgregado.style.display = "inline"; 
            divTercerVentana.innerHTML = ` <p>Vehículo: ${product.tipoVehiculo}</p>
                                <p>Modelo: ${product.modeloCubierta}</p>
                                <p>Marca: ${product.marca}</p>
                                <p>Stock adicionado: ${productoProvisorio.stock}</p>
                                <p>Stock total: ${product.stock}</p>
                                <p>Precio por unidad: $${product.precio}</p>`
        }
        localStorage.setItem("listaProducto", JSON.stringify(listaProductos)); 
    });                     
    } else if(productoProvisorio.nuevo == 1){
        primerVentana.style.display = "none";
        segundaVentana.style.display = "inline";
        tercerVentana.style.display = "none";
        precioNuevoProducto.style.display = "inline";
        btnAgregarProductoNuevo.style.display = "inline";
        btnReset.style.display = "inline";       
    }      
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

const rstProductoProvisorio = () => {
    productoProvisorio.tipoVehiculo= "Auto";
    productoProvisorio.modeloCubierta= "";
    productoProvisorio.marca= "Pirelli";
    productoProvisorio.precio= -1;
    productoProvisorio.stock= -1;
    productoProvisorio.nuevo= -1;
    return productoProvisorio;
};