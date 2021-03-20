export class Operacion {
    protected n1: number
    protected n2: number
    protected operacion: string

    constructor(n1: number, n2: number, operacion: string) {
        this.n1 = n1
        this.n2 = n2
        this.operacion = operacion
    }

    public resultado() {
        switch (this.operacion) {
            case 'suma':
                return this.n1 + this.n2
                break
            case 'resta':
                return this.n1 - this.n2
                break
            default:
                console.log(`${this.operacion} no es una operación válida`)
        }
    }
}

export const nuevoCalculo = (n1: number, n2: number, operacion: string) => {
    return new Operacion(n1, n2, operacion)
}