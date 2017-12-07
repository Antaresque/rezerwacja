import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzefComponent } from './szef.component';

describe('SzefComponent', () => {
  let component: SzefComponent;
  let fixture: ComponentFixture<SzefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
