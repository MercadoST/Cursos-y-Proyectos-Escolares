interface IPersona{
    nombre:string;
    apellido:string;
    añoNac:number;

    toString():string;
    edad(añoActual:number):number;
}


class Persona implements IPersona{
    readonly nombre:string;
    readonly apellido:string;
    public añoNac:number;  //se cambio private a public...(?)
    constructor (nombre:string, apellido:string, añoNac:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.añoNac = añoNac;
    }
    public toString():string{
        return this.nombre + this.apellido;
    }
    public edad(añoActual:number):number{
        return (añoActual - this.añoNac);
    }
}