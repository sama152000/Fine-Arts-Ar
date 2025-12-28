import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ContactInfo } from '../model/contact-message.model';

export interface ContactApiResponse {
  success: boolean;
  data: ContactInfo[];
  message: string;
  errors: any[];
  statusCode: number;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactUrl = environment.apiUrl + 'contacts/getall';

  constructor(private http: HttpClient) {}

  getContactInfo(): Observable<ContactApiResponse> {
    return this.http.get<ContactApiResponse>(this.contactUrl);
  }
}
