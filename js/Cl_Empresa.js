export default class Cl_Empresa{
    constructor(){
    this.sM=999
    this.mTE=0
    this.nM=""
    this.acumHE=0
    this.sueldo=0
    }
    /*procesarSueldo(t){
        if(t.hR>0){t.hR=t.hR*10}
        if(t.hE>0){t.hE=t.hE*25}
        if(t.hE>0 || t.hR>0){ this.sueldo+=t.hE+t.hR}
    }*/
    procesarTrabajador(t){
        this.acumHE+=t.hE*25
        /*if(this.sueldo<this.sM){
            this.sM=this.sueldo
            this.nM=t.nombre
        }*/
    }
    montoTotalExtra(){return this.acumHE}
    //sueldoMenor(){return this.sM}
    //nombreMenor(){return this.nM}
}