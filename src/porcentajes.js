

/**Calcular Precio con descuento de un articulo*/

const calcularPrecioConDescuento = (precio, descuento) =>{
    //formula    precio * (100% - descuento%) / 100
    const porcentajeDelDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajeDelDescuento ) / 100;

    return console.log(`El articulo cuesta ${precio}$ y tiene un descuento del ${descuento}%
    Con el descuento pagarias solamente ${PrecioConDescuento}$`)
}