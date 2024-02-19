import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CameraComponent } from '../../camera/camera.component';

@Component({
  selector: 'app-scan-invoice',
  standalone: true,
  imports: [CommonModule, CameraComponent],
  templateUrl: './scan-invoice.component.html',
  styleUrl: './scan-invoice.component.scss',
})
export class ScanInvoiceComponent {}
