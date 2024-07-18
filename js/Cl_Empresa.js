export default class Cl_Empresa{
    constructor(){
    this.sM=999
    this.nM=""
    this.acumHE=0
    this.sueldo=0
    }
    procesarTrabajador(t){
        this.acumHE+=t.hE*25  
        if(t.hR>0 || t.hE>0){this.sueldo=((t.hR*10)+(t.hE*25))}
        if(this.sueldo<this.sM){this.sM=this.sueldo; this.nM=t.nombre}
    }
    montoTotalExtra(){return this.acumHE}
    nombreMenor(){return this.nM}
    sueldoMenor(){return this.sM}
}