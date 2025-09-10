class Persona3Reload{
    protected nombre1:string;
    protected edad:number;
    protected direccion:string;
    constructor(nombre1:string, edad:number, direccion:string){
        this.nombre1=nombre1;
        this.edad=edad;
        this.direccion=direccion;
    }
    mostrarPersona(){
        console.log(`Nombre ${this.nombre1},
        Edad ${this.edad},
        Direccion ${this.direccion}`)
    }
}

class Empleado3 extends Persona3Reload{
    private sueldo:number;
    constructor(nombre1:string, edad:number, direccion:string, sueldo:number){
        super(nombre1, edad, direccion);
        this.sueldo=sueldo;
    }
    mostrarEmpleado(){
        this.mostrarPersona();
        console.log(`El sueldo es ${this.sueldo}`);
    }
}

const empleado3 = new Empleado3('Ana', 28, 'Calle Verdadera 123', 2000);
empleado3.mostrarEmpleado();
//empleado3.mostrarEmpleado(); No se puede acceder a un metodo protegido