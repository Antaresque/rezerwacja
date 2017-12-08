import { TestBed, inject } from '@angular/core/testing';

import { PracownicyService } from './pracownicy.service';

describe('PracownicyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PracownicyService]
    });
  });

  it('should be created', inject([PracownicyService], (service: PracownicyService) => {
    expect(service).toBeTruthy();
  }));
});
