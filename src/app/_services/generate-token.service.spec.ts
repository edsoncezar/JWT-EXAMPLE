import { TestBed, inject } from '@angular/core/testing';

import { GenerateTokenService } from './generate-token.service';

describe('GenerateTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenerateTokenService]
    });
  });

  it('should be created', inject([GenerateTokenService], (service: GenerateTokenService) => {
    expect(service).toBeTruthy();
  }));
});
