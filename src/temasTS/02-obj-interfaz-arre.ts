
    interface Alumno{
        edad: number,
        nombre: string,
        curso: string,
        email?: string, //propiedad opcional
        calificacion: number | string; //puede ser number o string
    }

    const alumno:Alumno={
    edad: 23,
    nombre: "Alex",
    curso: "Aplicaciones Web Progresivas",
    email: "alexed401@gmail.com",
    calificacion: 6.5
}

console.log(`El alumno ${alumno.nombre}
    tiene ${alumno.edad} 
    curso ${alumno.curso}
    nota ${alumno.calificacion}`);

let mascotas:string[]=['Perro', 'Gato', 'Hamster'];
mascotas[1]='Pajaro';
mascotas.push('Tortuga');
console.log(mascotas);

let notas:(number|string)[]=[7,8,9, 'Aprobado'];
notas.push(10);
notas.push('Sobresaliente');
console.log(notas);