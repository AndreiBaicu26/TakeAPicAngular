import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TakePhotoService } from '../../services/take-photo.service';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.css'],
})
export class ImageHolderComponent implements OnInit {
  @ViewChild('myCanvas') canvas: ElementRef;
  height = 0;
  width = 0;
  constructor(private takePhotoService: TakePhotoService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const canvasElement: HTMLCanvasElement = this.canvas.nativeElement;

    this.takePhotoService.canvas.subscribe((imageData) => {
      let img = new Image();

      img.onload = () => {
        canvasElement.getContext('2d').drawImage(img, 0, 0);
      };

      this.height = imageData.height;
      this.width = imageData.width;
      img.src = imageData.imageStream;
      this.download(imageData.imageStream);
    });
  }

  download(imageStream: any) {
    var link = document.createElement('a');
    link.download = 'picture.png';
    link.href = imageStream;
    link.click();
  }
}
