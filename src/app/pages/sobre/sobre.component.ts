import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

  imagemSrc = 'https://www.opensoft.pt/wp-content/uploads/2020/06/tendencias_software.png'

  imagemAt = 'desenvolvimento de sistemas de software'

  onButtonClick() {
    alert('TI esta em alta, quanto mais estuda mais, vantagem de conhecimento temos, e podemos evoluir muito rapido.');
  }
}
