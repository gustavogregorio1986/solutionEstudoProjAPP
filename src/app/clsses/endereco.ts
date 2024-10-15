export class Endereco {
    Id:string;
    Logradouro: string;
    Compelemnto: string;
    Bairro: string;
    Cidade: string;
    Estado:string;
    Id_Cliente!: string;

    constructor(Id: string,Logradouro: string, Compelemnto: string, Bairro: string, Cidade: string, Estado: string) {
        this.Id = Id;
        this.Logradouro = Logradouro;
        this.Compelemnto = Compelemnto;
        this.Bairro = Bairro;
        this.Cidade = Cidade;
        this.Estado = Estado;
    }
}
