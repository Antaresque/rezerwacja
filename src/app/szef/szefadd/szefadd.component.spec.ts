import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzefaddComponent } from './szefadd.component';

describe('SzefaddComponent', () => {
  let component: SzefaddComponent;
  let fixture: ComponentFixture<SzefaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzefaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzefaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
