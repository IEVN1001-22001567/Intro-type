class Persona {
    nombre:string;
    edad:number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre ${this.nombre}, Edad: ${this.edad} `);
    }
}
const persona1 = new Persona('Alex', 23);
persona1.imprimir();


/* class Persona2 {
    nombre:string;
    edad:number;
    constructor(nombre:string, edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre ${this.nombre}, Edad: ${this.edad} `);
    }
}
const persona2 = new Persona('Juan', 30);
persona2.nombre= 'Alex';
persona2.edad= 23
persona1.imprimir(); */