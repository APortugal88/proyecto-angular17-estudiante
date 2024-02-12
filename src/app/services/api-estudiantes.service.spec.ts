import { TestBed } from '@angular/core/testing';

import { ApiEstudiantesService } from './api-estudiantes.service';

describe('ApiEstudiantesService', () => {
  let service: ApiEstudiantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEstudiantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
