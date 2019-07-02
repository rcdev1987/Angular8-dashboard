import { TestBed } from '@angular/core/testing';

import { OffsetSelectionCompService } from './offset-selection-comp.service';

describe('OffsetSelectionCompService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OffsetSelectionCompService = TestBed.get(OffsetSelectionCompService);
    expect(service).toBeTruthy();
  });
});
