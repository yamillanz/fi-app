import { Injectable } from '@angular/core';
import { Database, ref, get, child, remove, set, update } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(private db: Database) {}

  getCompanies() {
    const dbRef = ref(this.db);
    return get(child(dbRef, 'companies'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log('No data available');
          return [];
        }
      })
      .catch((error) => {
        console.error(error);
        return [];
      });
  }

  getCompany(id: string) {
    const companyRef = ref(this.db, `companies/${id}`);
    return get(companyRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log('No data available');
          return null;
        }
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  }

  deleteCompany(id: string) {
    const companyRef = ref(this.db, `companies/${id}`);
    return remove(companyRef)
      .then(() => {
        console.log(`Company with id ${id} deleted successfully`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  saveCompany(id: string, data: any) {
    const companyRef = ref(this.db, `companies/${id}`);
    return set(companyRef, data)
      .then(() => {
        console.log(`Company with id ${id} saved successfully`);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
