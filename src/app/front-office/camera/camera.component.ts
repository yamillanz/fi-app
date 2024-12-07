import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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

  width: number = window.innerWidth < 768 ? window.innerWidth - 10 : window.innerWidth / 2;
  height: number = window.innerWidth < 768 ? window.innerHeight / 2 : window.innerHeight - 10;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // this.screenWidth = window.innerWidth;
    // this.screenHeight = window.innerHeight;
    this.width = window.innerWidth < 768 ? window.innerWidth - 10 : window.innerWidth / 2;
    this.height = window.innerWidth < 768 ? Math.round(window.innerHeight / 1.5) : window.innerHeight;
    // console.log('Width: ' + this.screenWidth + ' Height: ' + this.screenHeight);
  }

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
