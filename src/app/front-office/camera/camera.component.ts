import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamModule } from 'ngx-webcam';
import { ButtonModule } from 'primeng/button';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [WebcamModule, NgIf, ButtonModule],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.scss',
})
export class CameraComponent {
  showWebcam = true;
  public webcamImage?: WebcamImage;
  private trigger: Subject<void> = new Subject<void>();

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === 'NotAllowedError') {
      console.warn('Camera access was not allowed by user!');
    }
  }
}
