import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { EnderecoServiceService } from '../../services/endereco-service.service';
import { ClienteServiceService } from '../../services/cliente-service.service';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent implements OnInit{

  dados: any[] = [];

  constructor(private clienteService: ClienteServiceService) {}

  ngOnInit(): void{
    this.listarClientes();
  }

  listarClientes(){
    this.clienteService.listarClientes().subscribe(
      (response) => {
        this.dados = response;
      },
      (error) => {
        console.error('Erro ao carregar os dados', error);
      }
    );
  }
}
