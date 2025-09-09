interface Producto{
    nombre:string;
    precio:number;

}

const telefono:Producto={
    nombre:'Motorola G60',
    precio: 3500,
};

const tablet:Producto={
    nombre:'Ipad Air',
    precio: 2600,
};

function calcularIVA(productos:Producto[]):number{
    let total=0;
    for(let producto of productos){
        total+=producto.precio;
    }
    return total*0.21;
}

const articulos=[telefono, tablet];
const iva=calcularIVA(articulos);
console.log(`El iva es: ${iva}`);

//Desestructuracion de funcion
function calcularIVAdos(productos:Producto[]):[number,number]{
    let total=0;
    for(let producto of productos){
        total+=producto.precio;
    }
    return [total, total*0.21];
}

const [total, ivaDos]=calcularIVAdos(articulos);
console.log(`El total es ${total}`);
console.log(`El iva es ${ivaDos}`);

