import { TestBed } from '@angular/core/testing';
import { ScrollSectionService } from './scroll-section.service';


describe('ScrollSectionService', () => {
  
  let service: ScrollSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});