import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incremental-buttons',
  templateUrl: './incremental-buttons.component.html',
  styleUrls: ['./incremental-buttons.component.css'],
})
export class IncrementalButtonsComponent implements OnInit {
  @Output() increment: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  incrementTop() {
    this.increment.emit('top');
  }

  incrementBottom() {
    this.increment.emit('height');
  }

  incrementLeft() {
    this.increment.emit('left');
  }

  incrementRight() {
    this.increment.emit('width');
  }
}
