/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentServicesService } from './student-services.service';

describe('Service: StudentServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentServicesService]
    });
  });

  it('should ...', inject([StudentServicesService], (service: StudentServicesService) => {
    expect(service).toBeTruthy();
  }));
});
