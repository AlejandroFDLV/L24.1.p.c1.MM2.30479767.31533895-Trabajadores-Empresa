export default class Cl_Empresa{
constructor(){
    this.sM=999
    this.mTE=0
    this.nM=""
    this.acumSueldo=0
}
horasRegulares(t){
    if(t.hR>0){return t.hR*10}
}
horasExtra(t){
    if(t.hE>0){return t.hE*20}
procesarTrabajador(t){
    acumSueldo+=(this.horasExtra+this.horasRegulares)
    if(t.hR>0){t.hR*10}
    if(t.hE>0){t.hE*25}
    }
}
montoTotalExtra(){return this.acEdHom/3}
sueldoMenor(){return this.sM}
nombreMenor(){return this.nM}
}