import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CompaniesListComponent } from '../companies-list/companies-list.component';
import { InvoicesService } from './invoices.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-invoices-list',
  standalone: true,
  imports: [CommonModule, TableModule, CompaniesListComponent, ButtonModule, ProgressSpinnerModule],
  templateUrl: './invoices-list.component.html',
  styleUrl: './invoices-list.component.scss',
})
export class InvoicesListComponent implements OnInit {
  invoices: any[] = [];

  constructor(private invoicesService: InvoicesService) {}

  async ngOnInit() {
    this.invoices = await this.invoicesService.getInvoices();
  }

  deleteSelectedInvoice(invoice: any) {}
}
