"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nuevoCalculo = exports.Operacion = void 0;
class Operacion {
    constructor(n1, n2, operacion) {
        this.n1 = n1;
        this.n2 = n2;
        this.operacion = operacion;
    }
    resultado() {
        switch (this.operacion) {
            case 'suma':
                return this.n1 + this.n2;
                break;
            case 'resta':
                return this.n1 - this.n2;
                break;
            default:
                console.log(`${this.operacion} no es una operación válida`);
        }
    }
}
exports.Operacion = Operacion;
const nuevoCalculo = (n1, n2, operacion) => {
    return new Operacion(n1, n2, operacion);
};
exports.nuevoCalculo = nuevoCalculo;
