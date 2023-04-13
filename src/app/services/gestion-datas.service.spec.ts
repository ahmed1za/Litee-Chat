import { TestBed } from '@angular/core/testing';

import { GestionDatasService } from './gestion-datas.service';

describe('GestionDatasService', () => {
  let service: GestionDatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionDatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
