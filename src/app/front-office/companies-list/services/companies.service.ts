import { Injectable, inject } from '@angular/core';
import { Database, list, ref, push, update, object, listVal } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private db = inject(Database);

  constructor() {}

  getCompanies() {
    // const companies = list(ref(this.db, 'companies'));
    // const companies = listVal(ref(this.db, 'companies')); 

    // companies.subscribe((data) => {
    //   console.log('🚀 ~ file: auth.service.ts:47 ~ AuthService ~ getCompanies ~ data', data);
    // });

  }

  createCompany() {
    const newCompany = {
      name: 'Company 1',
      address: 'Address 1',
      phone: '123456789',
    };
    push(ref(this.db, 'companies'), newCompany);
  }

  updateCompany(id: string) {
    const company = {
      name: 'Company 1',
      address: 'Address 1',
      phone: '123456789',
    };
    update(ref(this.db, 'companies'), company);
  }

  removeCompany() {
    const refDb: any = ref(this.db, 'companies');

    // const query = orderByValue();

    // remove(ref(this.db, 'companies'));
  }
}
