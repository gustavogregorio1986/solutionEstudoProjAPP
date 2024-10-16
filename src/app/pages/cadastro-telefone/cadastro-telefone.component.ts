import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-telefone',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule],
  templateUrl: './cadastro-telefone.component.html',
  styleUrl: './cadastro-telefone.component.css'
})
export class CadastroTelefoneComponent implements OnInit{

  telefoneForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.telefoneForm = this.fb.group({
        Tipo:['', Validators.required],
        Numero:['', Validators.required],

    });
  }

  ngOnInit(){

  }

  onSubmit() {
    if (this.telefoneForm.valid) {
      console.log('Formulário do cliente:', this.telefoneForm.value);
      // Lógica para processar os dados do formulário
    }
  }
}
