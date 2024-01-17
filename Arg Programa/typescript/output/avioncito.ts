class Turbina{
    private numTurbinas:number = 0;
    public constructor (n:number)
    {
        this.numTurbinas= n;
    }
    public ToString()
    {
        return this.numTurbinas + "Turbina/s"
    }
}


class TrenDeAterrizaje{
    private numNeumaticos:number = 0;
    private numAmortiguadores:number = 0;
    public constructor( nNeu:number, nAmor:number)
    {
        this.numNeumaticos= nNeu;
        this.numAmortiguadores= nAmor;
    }
    public ToString()
    {
        return "Tren de aterrizaje:  Numero de Neumaticos: " + this.numNeumaticos + "; Numero de Amortiguadores: "+ this.numAmortiguadores;
    }
}

class Alas{
    private frontales:number=0;
    private deCola:number=0;
    public constructor(nFron:number, nCola:number)
    {
        this.frontales=nFron;
        this.deCola=nCola;
    }
    public ToString()
    {
        return "Alas: Frontales: "+this.frontales+ ", De Cola: "+ this.deCola;
    }
}

class Cubierta {
    private cabinaTripulacion:boolean = false;
    private cabinaVuelo:boolean= false;
    private sistemaEmergencia:boolean=false;
    private numTanquesCombustible:number = 0;
    private numPuertasSalidas:number = 0;

    public constructor( pCabTrip:boolean, pCabVuelo:boolean, pSistEmer:boolean, pTankComb:number, pPueSalida:number)
    {
        this.cabinaTripulacion=pCabTrip;
        this.cabinaVuelo=pCabVuelo;
        this.sistemaEmergencia=pSistEmer;
        this.numPuertasSalidas=pPueSalida;
        this.numTanquesCombustible=pTankComb;
    }

    public ToString()
    {
        let mensaje= "Cubierta compuesta de: ";
        if (this.cabinaVuelo)
        {
            mensaje+= " Cubierta de vuelo, ";
        }
        if (this.cabinaTripulacion)
        {
            mensaje+= "Cubierta de Tripulacion, ";
        }
        if (this.sistemaEmergencia)
        {
            mensaje+= "Sistema de Emergencia, ";
        }
        mensaje+= this.numTanquesCombustible + "Tanques de Combustible, ";
        mensaje += this.numPuertasSalidas + "Puertas de Salida, ";
        return mensaje;
    }
}

class Aeroplano {
    private turbina:Turbina;
    private trenDeAterrizaje:TrenDeAterrizaje;
    private alas:Alas;
    private cubierta:Cubierta;

    constructor  ( pTurbina:Turbina, pTrenAterri:TrenDeAterrizaje, pAlas:Alas, pCubierta:Cubierta)
    {
        this.turbina=pTurbina;
        this.trenDeAterrizaje=pTrenAterri;
        this.alas=pAlas;
        this.cubierta=pCubierta;
    }

    public ToString()
    {
        let mensaje ="Aeroplano compuesto por: ";
        mensaje+= this.turbina.ToString();
        mensaje+= this.alas.ToString();
        mensaje+= this.cubierta.ToString();
        mensaje+= this.trenDeAterrizaje.ToString();
        return mensaje;

    }
}