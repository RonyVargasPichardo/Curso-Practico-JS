

/**Calcular Precio con descuento de un articulo*/

const result = document.getElementById('resultPrecio');
const precio = document.getElementById('precio');
const descuento = document.getElementById('descuento');

const PrecioConDescuento = (precio, descuento) =>{
    //formula    precio * (100% - descuento%) / 100
    const porcentajeDelDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajeDelDescuento ) / 100;

    return result.innerText = `El articulo cuesta $${precio}
Tiene un descuento del ${descuento}%
Con el descuento pagarias solamente $${PrecioConDescuento}.`;

}

function calcularPrecioConDescuento(){
    const precioValue = parseFloat(precio.value);
    const descuentoValue = parseFloat(descuento.value);
    
    if(!precioValue || !descuentoValue){
        result.innerText = `Ingresa los datos`;
    }else {
        PrecioConDescuento(precioValue, descuentoValue);
        precio.value = '';
        descuento.value = '';
    }
    
}