import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-consulta-telefone',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './consulta-telefone.component.html',
  styleUrl: './consulta-telefone.component.css'
})
export class ConsultaTelefoneComponent implements OnInit {

  ngOnInit(){

  }
}
