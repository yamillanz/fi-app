import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CameraComponent } from '../../camera/camera.component';
import { DropFilesComponent } from '../../drop-files/drop-files.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-scan-invoice',
  standalone: true,
  imports: [CommonModule, CameraComponent, DropFilesComponent],
  providers: [MessageService],
  templateUrl: './scan-invoice.component.html',
  styleUrl: './scan-invoice.component.scss',
})
export class ScanInvoiceComponent {}
