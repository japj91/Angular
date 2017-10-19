import { TestBed, inject } from '@angular/core/testing';

import { MyremoteserviceService } from './myremoteservice.service';

describe('MyremoteserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyremoteserviceService]
    });
  });

  it('should be created', inject([MyremoteserviceService], (service: MyremoteserviceService) => {
    expect(service).toBeTruthy();
  }));
});
