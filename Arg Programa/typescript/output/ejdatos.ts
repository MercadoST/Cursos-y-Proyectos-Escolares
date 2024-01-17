function mensajeUsuario(): void{
    console.log("Este es un mensaje para el usuario con la funcion void");
}

enum color{
    blanco,
    rojo,
    verde
}

//Arrays 

let list : string[]=['pimiento','papas','tomate'];
let rocosos : boolean[]=[true, false,true,false,];
let perdidos: any[]=[9,true,'asteroides'];
let diametro: [string, number] = ['saturno',116576];

function identity <T> (arg: T): T{
    return arg;
}

function identiti(arg: number) : number {
    return arg;
}

let persona: object ={nombre:"ana", edad:45}

//desestructuracion

var obj={a:1,b:2,c:3};
console.log(obj.c);

var array=[1,2,3,5];
console.log(array[2]);
//desestructuración con estructuración usando el mismo array

var [x,y, ...rest]=array;
console.log(rest);

let nombre:any= "juan";

// aserciones 2 tipos
(nombre as string).toUpperCase();

(<string>nombre).toUpperCase();

function calcularIva(productos:Producto[]):[number, number]{
let total= 0;
productos.forEach(({precio}) =>{
    total+= precio;
});
return [total, total*0.15];
}

class Producto {
    readonly precio:number;
    constructor (precio:number){
        this.precio=precio;
    }

}