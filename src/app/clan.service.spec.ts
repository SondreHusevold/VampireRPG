import { TestBed, inject } from '@angular/core/testing';

import { ClanService } from './clan.service';

describe('ClanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClanService]
    });
  });

  it('should be created', inject([ClanService], (service: ClanService) => {
    expect(service).toBeTruthy();
  }));
});
