// Prototipo para lo que será una tienda para mascotas

    let nombre= prompt("Ingresa tu nombre")
    if (nombre !== "" && isNaN (nombre)) {
    alert(`Hola, ${nombre}`)
    }
    else {
        alert ("Ingresa un formato válido");
        prompt("Ingresa tu nombre")
    }




const productos = [
  { id: 1, nombre: "Cama para gato", precio: 65 },
  { id: 2, nombre: "Rascador", precio: 120 },
  { id: 3, nombre: "Cama para perro", precio: 80 },
  { id: 4, nombre: "Collar para perro", precio: 30 },
  { id: 5, nombre: "Cepillo para gato", precio: 25 }
];

let carrito = [];

function verMenu () {
return prompt 
("Selecciona una opción para continuar:\n1. Ver productos\n2. Ver carrito\n3. salir");
}


function mostrarProductos (){
let lista = "Productos disponibles:\n";
for (let i = 0; i < productos.length; i++) {
    lista += `${productos[i].id}. ${productos[i].nombre} - S/${productos[i].precio}\n`;
  }
        
let respuesta = prompt(lista + "\nElige el número del producto que desees agregar:");
let productoElegido = null;
for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === parseInt(respuesta)) {
        productoElegido = productos[i];
    }
    
    }

if (productoElegido) {
      carrito.push(productoElegido);
      alert(productoElegido.nombre + " fue agregado al carrito 🛒.\n");
    } 
    else{
      alert("Producto no encontrado ❌");
    }
}


function verCarrito (){
if (carrito.length === 0) {
        alert("No tienes productos en tu carrito 🥺");
    }

let resumendeCompra = "Mi carrito de compras 🛒:\n";
let total = 0 ;
let i = 0 ;
while (i  < carrito.length) {
    resumendeCompra += `${[i+1]}. ${carrito[i].nombre} - S/${carrito[i].precio}\n`;
    total += carrito[i].precio;
    i++;
  }
  resumendeCompra += "\nTotal a pagar: S/ " + total;
alert(resumendeCompra);

}
 




function main() {
let opcion = verMenu();

while (opcion !=="3"){
    switch (opcion){
        case"1":
        mostrarProductos();
        break;
        case "2":
        verCarrito();
        break;  
        default:
         alert("Opción no válida.");
    }
   opcion = verMenu();
}


    alert ("Hasta pronto 👋")
}
 main ();
