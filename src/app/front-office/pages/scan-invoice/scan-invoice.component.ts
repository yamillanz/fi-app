import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CameraComponent } from '../../camera/camera.component';
import { DropFilesComponent } from '../../drop-files/drop-files.component';
import { MessageService } from 'primeng/api';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-scan-invoice',
  standalone: true,
  imports: [CommonModule, CameraComponent, DropFilesComponent, StepperModule, ButtonModule],
  providers: [MessageService],
  templateUrl: './scan-invoice.component.html',
  styleUrl: './scan-invoice.component.scss',
})
export class ScanInvoiceComponent {}
