import { TestBed } from '@angular/core/testing';

import { CargaFileService } from './carga-file.service';

describe('CargaFileService', () => {
  let service: CargaFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
