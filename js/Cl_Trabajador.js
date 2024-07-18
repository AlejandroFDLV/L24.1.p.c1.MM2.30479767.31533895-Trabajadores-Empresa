export default class Cl_Trabajador{
    constructor(nombre, hR, hE){
        this.nombre=nombre
        this.hR=hR
        this.hE=hE
    }
    set nombre(nombre){this._nombre=nombre}
    set hR(hR){this._hR=hR}
    set hE(hE){this._hE=hE}

    get nombre(){return this._nombre}
    get hR(){return this._hR}
    get hE(){return this._hE}
}