export class Cliente {
    Id:string;
    NomeCliente: string;
    EmailCliente: string;
    cpf: string;

    constructor(Id: string,NomeCliente: string, EmailCliente: string, cpf: string) {
        this.Id = Id;
        this.NomeCliente = NomeCliente;
        this.EmailCliente = EmailCliente;
        this.cpf = cpf;
      }
}
