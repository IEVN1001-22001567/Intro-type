function suma(a: number, b: number): number {
    return a+ b;
}

console.log(suma(10, 20));

const sumaFlecha = (a: number, b: number): number=> a + b;
console.log(sumaFlecha(15,25));

function saludar(nombre: string, apellido?: string): string{
    if (apellido) {
        return `Hola, ${nombre} ${apellido}`;
    } else{
        return `Hola, ${nombre}`
    }
}

console.log(saludar('Alex', 'Garcia'));
console.log(saludar('Alex'));


interface Mascota{
    nombre: string;
    tipo: string;
    edad: number;
    mostrarEdad:()=>void;
}

function calcular(mascotas:Mascota, x:number):void{
    mascotas.edad+=x;
    console.log(mascotas);
    console.log(mascotas.mostrarEdad());
}

const nuevaMascota: Mascota = {
    nombre: 'Rufo',
    tipo: 'Perro',
    edad: 2,
    mostrarEdad() {
        console.log(`La edad de ${this.nombre} es ${this.edad} años`)
    },
};
calcular(nuevaMascota,2);