import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokojeListaComponent } from './pokoje-lista.component';

describe('PokojeListaComponent', () => {
  let component: PokojeListaComponent;
  let fixture: ComponentFixture<PokojeListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokojeListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokojeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
