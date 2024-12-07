import { Injectable } from '@angular/core';
import { Database, ref, get, child, remove, set } from '@angular/fire/database';

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

  getInvoice(id: string) {
    const invoiceRef = ref(this.db, `invoices/${id}`);
    return get(invoiceRef)
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

  deleteInvoice(id: string) {
    const invoiceRef = ref(this.db, `invoices/${id}`);
    return remove(invoiceRef)
      .then(() => {
        console.log(`Invoice with id ${id} deleted successfully`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  saveInvoice(id: string, data: any) {
    const invoiceRef = ref(this.db, `invoices/${id}`);
    return set(invoiceRef, data)
      .then(() => {
        console.log(`Invoice with id ${id} saved successfully`);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
