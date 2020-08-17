import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModifyGreenRectangleDimensionsService } from '../../services/modify-green-rectangle-dimensions.service';

@Component({
  selector: 'app-incremental-buttons',
  templateUrl: './incremental-buttons.component.html',
  styleUrls: ['./incremental-buttons.component.css'],
})
export class IncrementalButtonsComponent implements OnInit {
  @Output() increment: EventEmitter<string> = new EventEmitter<string>();

  constructor(private modifyService: ModifyGreenRectangleDimensionsService) {}

  ngOnInit(): void {}

  incrementTop() {
    this.modifyService.modify('top');
  }

  incrementBottom() {
    this.modifyService.modify('height');
  }

  incrementLeft() {
    this.modifyService.modify('left');
  }

  incrementRight() {
    this.modifyService.modify('width');
  }
}
