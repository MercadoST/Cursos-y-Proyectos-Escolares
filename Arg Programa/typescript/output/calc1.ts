class Operacion{
    protected valorA:number;
    protected valorB:number;
    protected resultado:number;
    constructor(){
        this.valorA=0;
        this.valorB=0;
        this.resultado=0;
    }

    set ValorA(value:number){
        this.valorA=value;
    }
    set ValorB(value:number){
        this.valorB=value;
    }
     
    get Resultado():number{
        return this.resultado;
    }
}

class Suma extends Operacion{
    Sumar()
    {
        this.resultado=this.valorA+this.valorB;
    }
}

class Restar extends Operacion
{
    Restar()
    {
        this.resultado=this.valorA-this.valorB;
    }
}

let operacionS= new Suma();
operacionS.ValorA=45;
operacionS.ValorB=10;
operacionS.Sumar();
console.log("El resultado de la suma es " + operacionS.Resultado);

let operacionR= new Restar();
operacionR.ValorA=45;
operacionR.ValorB=10;
operacionR.Restar();
console.log("El resultado de la resta es " + operacionR.Resultado);
