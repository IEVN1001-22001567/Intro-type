interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor:Reproductor={
    volumen: 90,
    segundo: 36,
    cancion: 'Demons',
    detalles:{
        autor: 'Imagine Dragons',
        anio: 2017,
    }
};

console.log('El volumen actual es: ', reproductor.volumen)
console.log('El segundo actual es: ', reproductor.segundo)
console.log('La cancion actual es: ', reproductor.cancion)
console.log('El autor es: ', reproductor.detalles.autor)
//Desestructuracion de objetos

const {volumen, segundo, cancion, detalles}=reproductor;
const{autor:nuevoautor}=detalles;
console.log('El volumen actual es: ',volumen)
console.log('El segundo actual es: ',segundo)
console.log('La cancion actual es: ',cancion)
console.log('El autor es: ', nuevoautor)

//Desestructurar arreglos
const rentagirlfriend:string[]=['Chizuru', 'Mami', 'Ruka'];
const [w1,w2,w3]=rentagirlfriend;
console.log('Novia 1: ',w1);
console.log('Novia 2: ',w2);
console.log('Novia 3: ',w3);

const[,,w4]=rentagirlfriend;
console.log('Novia 4: ',w4);

