export class Telefone {
    Id:string;
    Tipo: string;
    Numero: string;
    Id_Cliente!: string;
    

    constructor(Id: string,Tipo: string, Numero: string) {
        this.Id = Id;
        this.Tipo = Tipo;
        this.Numero = Numero;
    }
}
