import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { EnderecoServiceService } from '../../services/endereco-service.service';

@Component({
  selector: 'app-consulta-endereco',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './consulta-endereco.component.html',
  styleUrl: './consulta-endereco.component.css'
})
export class ConsultaEnderecoComponent implements OnInit {
  
  dados: any[] = [];
   
  constructor(private enderecoService: EnderecoServiceService) {}

  ngOnInit(){

  }

  listarEnderecos(){
    this.enderecoService.listarEnderecos().subscribe(
      (response) => {
        this.dados = response;
      },
      (error) => {
        console.error('Erro ao carregar os dados', error);
      }
    );
  }
}
