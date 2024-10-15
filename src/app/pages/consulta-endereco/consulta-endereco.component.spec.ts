import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEnderecoComponent } from './consulta-endereco.component';

describe('ConsultaEnderecoComponent', () => {
  let component: ConsultaEnderecoComponent;
  let fixture: ComponentFixture<ConsultaEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaEnderecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
