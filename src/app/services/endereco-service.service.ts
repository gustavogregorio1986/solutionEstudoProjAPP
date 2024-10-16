import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoServiceService {

  private apiUrlCadastro = 'https://localhost:7200/api/AdicionarEndereco'
  private apiUrlConsulta = 'https://localhost:7200/api/ListarEnderecos'

  constructor(private http: HttpClient) { }

  adicionarEndereco(dados: any): Observable<any> {
    return this.http.post(this.apiUrlCadastro, dados);
  }

  listarEnderecos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlConsulta); // Supondo que a API retorna uma lista de dados
  }
}
