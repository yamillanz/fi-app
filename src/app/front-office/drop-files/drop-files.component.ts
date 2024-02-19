import { CommonModule, NgFor, NgIf,  } from '@angular/common';
import { Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-drop-files',
  standalone: true,
  imports: [FileUploadModule, ToastModule, CommonModule],
  templateUrl: './drop-files.component.html',
  styleUrl: './drop-files.component.scss',
})
export class DropFilesComponent {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event : any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }
}
