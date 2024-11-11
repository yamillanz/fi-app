import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CompaniesService } from './services/companies.service';

@Component({
  selector: 'app-companies-list',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './companies-list.component.html',
  styleUrl: './companies-list.component.scss',
})
export class CompaniesListComponent implements OnInit {
  companiesServ = inject(CompaniesService);
  companies: any[] = [];

  constructor() {
    // ...existing code...
  }

  ngOnInit() {
    this.loadCompanies();
  }

  async loadCompanies() {
    const companiesData = await this.companiesServ.getCompanies();
    // this.companies = companiesData ? Object.values(companiesData) : [];
    this.companies = companiesData ?? [];
  }

  editing: boolean = false;

  onRowEditInit(company: any) {}
  deleteSelectedProducts(company: any) {}
}
