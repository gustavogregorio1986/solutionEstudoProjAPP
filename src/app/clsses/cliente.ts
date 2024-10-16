export class Cliente {
    Id:string;
    NomeCliente: string;
    EmailCliente: string;
    Cpf: string;

    constructor(Id: string,NomeCliente: string, EmailCliente: string, Cpf: string) {
        this.Id = Id;
        this.NomeCliente = NomeCliente;
        this.EmailCliente = EmailCliente;
        this.Cpf = Cpf;
      }
}
