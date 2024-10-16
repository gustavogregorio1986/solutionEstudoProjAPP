import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private apiUrlCadastro = 'https://localhost:7200/api/AdicionarCliente'
  private apiUrlConsulta = 'https://localhost:7200/api/ListarClientes'

  constructor(private http: HttpClient) { }

  adicionarCliente(dados: any): Observable<any> {
    return this.http.post(this.apiUrlCadastro, dados);
  }

  listarClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlConsulta); // Supondo que a API retorna uma lista de dados
  }
}
