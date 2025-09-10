import { calcularIVAdos,type Producto} from "./05-Desestructuracion-funciones"

const carrito:Producto[]=[
    {
        nombre:'Motorola G60s',
        precio:3600
    },
    {
       nombre:'Motorola G24',
        precio:2600 
    },
    {
        nombre:'Motorola 8s',
        precio:1600
    }

];

const [total, iva] = calcularIVAdos(carrito);
console.log(`El total es ${total}`);
console.log(`El iva es ${iva}`);