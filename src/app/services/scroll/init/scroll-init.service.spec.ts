import { TestBed } from '@angular/core/testing';

import { ScrollInitService } from './scroll-init.service';

describe('ScrollInitService', () => {
  
  let service: ScrollInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});