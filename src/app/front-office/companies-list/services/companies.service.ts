import { Injectable, inject } from '@angular/core';
import { Database, list, ref } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private db = inject(Database);

  constructor() {}

  getCompanies() {
    const companies = list(ref(this.db, 'companies'));
    companies.subscribe((data) => {
      console.log('🚀 ~ file: auth.service.ts:47 ~ AuthService ~ constructor ~ data', data);
    });
  }
}
