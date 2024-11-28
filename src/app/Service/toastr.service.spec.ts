import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { Injectable } from '@angular/core';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
@Injectable({ providedIn: 'root' })
export class ToastrService {
  showLoginSucces() {
    console.log('Login Successful');
  }

  // Define other methods similarly
}