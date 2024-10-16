import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-consulta-endereco',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './consulta-endereco.component.html',
  styleUrl: './consulta-endereco.component.css'
})
export class ConsultaEnderecoComponent implements OnInit {
  
  ngOnInit(){

  }
}
