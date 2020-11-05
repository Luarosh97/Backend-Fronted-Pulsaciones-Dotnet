import { TestBed } from '@angular/core/testing';

import { ContactenoServiceService } from './contacteno-service.service';

describe('ContactenoServiceService', () => {
  let service: ContactenoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactenoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
