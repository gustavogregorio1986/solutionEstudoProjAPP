import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule, HttpClientModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit{

  clienteForm!: FormGroup;

  constructor(private fb: FormBuilder){
       this.clienteForm = this.fb.group({
        NomeCliente: ['', Validators.required],
        EmailCliente: ['', Validators.required],
        Cpf: ['', Validators.required]       
       })
  }

  ngOnInit() {
    
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      console.log('Formulário do cliente:', this.clienteForm.value);
      // Lógica para processar os dados do formulário
    }
  }
}
