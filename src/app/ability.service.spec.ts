import { TestBed, inject } from '@angular/core/testing';

import { AbilityService } from './ability.service';

describe('AbilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbilityService]
    });
  });

  it('should be created', inject([AbilityService], (service: AbilityService) => {
    expect(service).toBeTruthy();
  }));
});
