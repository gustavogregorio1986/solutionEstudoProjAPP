import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefoneServiceService {

   private apiUrlCadastro = 'https://localhost:7200/api/AdicionarTelefone'
  private apiUrlConsulta = 'https://localhost:7200/api/ListarTelefones'

  constructor(private http: HttpClient) { }

  cadastrar(dados: any): Observable<any> {
    return this.http.post(this.apiUrlCadastro, dados);
  }

  consultar(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlConsulta); // Supondo que a API retorna uma lista de dados
  }
}
