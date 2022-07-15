import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEdicaoComponent } from './tela-edicao.component';

describe('TelaEdicaoComponent', () => {
  let component: TelaEdicaoComponent;
  let fixture: ComponentFixture<TelaEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaEdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
