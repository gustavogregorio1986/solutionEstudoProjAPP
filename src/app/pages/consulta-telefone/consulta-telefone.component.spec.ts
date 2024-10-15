import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTelefoneComponent } from './consulta-telefone.component';

describe('ConsultaTelefoneComponent', () => {
  let component: ConsultaTelefoneComponent;
  let fixture: ComponentFixture<ConsultaTelefoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaTelefoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
