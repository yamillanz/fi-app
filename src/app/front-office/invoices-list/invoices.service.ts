import { Injectable } from '@angular/core';
import { Database, ref, get, child } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class InvoicesService {
  constructor(private db: Database) {}

  getInvoices() {
    const dbRef = ref(this.db);
    return get(child(dbRef, 'invoices'))
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
}
