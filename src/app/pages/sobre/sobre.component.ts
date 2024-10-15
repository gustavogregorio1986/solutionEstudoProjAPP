import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

  onButtonClick() {
    alert('TI esta em alta, quanto mais estuda mais, vantagem de conhecimento temos, e podemos evoluir muito rapido.');
  }
}
