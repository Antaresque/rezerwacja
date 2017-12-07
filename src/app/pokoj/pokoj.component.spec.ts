import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokojComponent } from './pokoj.component';

describe('PokojComponent', () => {
  let component: PokojComponent;
  let fixture: ComponentFixture<PokojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
