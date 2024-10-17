import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { TelefoneServiceService } from '../../services/telefone-service.service';

@Component({
  selector: 'app-consulta-telefone',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './consulta-telefone.component.html',
  styleUrl: './consulta-telefone.component.css'
})
export class ConsultaTelefoneComponent implements OnInit {

  dados: any[] = [];

  constructor(private telefoneService: TelefoneServiceService){}

  ngOnInit(){

  }

  listarTelfones(){
    this.telefoneService.consultar().subscribe(
      (response) => {
        this.dados = response;
      },
      (error) => {
        console.error('Erro ao carregar os dados', error);
      }
    );
  }

}
