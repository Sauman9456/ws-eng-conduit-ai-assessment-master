import { ApiService } from '@realworld/core/http-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {
  constructor(private apiService: ApiService) {}

  getTags(): Observable<{ tags: string[] }> {
    console.log('getTags called', this.apiService.get('/tags'));
    return this.apiService.get('/tags');
  }
}
