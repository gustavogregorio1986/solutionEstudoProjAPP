import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-endereco',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule],
  templateUrl: './cadastro-endereco.component.html',
  styleUrl: './cadastro-endereco.component.css'
})
export class CadastroEnderecoComponent implements OnInit {

  enderecoForm!: FormGroup;

   constructor(private fb: FormBuilder){
      this.enderecoForm = this.fb.group({
        Logradouro:['', Validators.required],
        Compelemnto:['', Validators.required],
        Bairro:['', Validators.required],
        Cidade:['', Validators.required],
        Estado:['', Validators.required],
      });
   }

  ngOnInit(){

  }

  onSubmit() {
    if (this.enderecoForm.valid) {
      console.log('Formulário do cliente:', this.enderecoForm.value);
      // Lógica para processar os dados do formulário
    }
  }
}
