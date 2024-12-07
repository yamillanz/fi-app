import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanInvoiceComponent } from './scan-invoice.component';

describe('ScanInvoiceComponent', () => {
  let component: ScanInvoiceComponent;
  let fixture: ComponentFixture<ScanInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScanInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
