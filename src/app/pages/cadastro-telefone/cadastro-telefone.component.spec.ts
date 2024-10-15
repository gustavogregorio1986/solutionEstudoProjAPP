import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTelefoneComponent } from './cadastro-telefone.component';

describe('CadastroTelefoneComponent', () => {
  let component: CadastroTelefoneComponent;
  let fixture: ComponentFixture<CadastroTelefoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroTelefoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
