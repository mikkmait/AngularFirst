import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() name: string;
  @Input() color: string;
  @Input() colorBorder: string;

  constructor() {
    this.name = 'PillPusher';
    this.color = 'rgba(0, 0, 0, 0%';
    this.colorBorder = '0px';
  }

  onMouseEnter(hoverName: HTMLElement) {
    hoverName.style.backgroundColor = "rgba(0, 255, 102, 50%";
    hoverName.style.border = "1px solid rgba(0, 255, 102, 100%)";
  }

  onMouseOut(hoverName: HTMLElement) {
    hoverName.style.backgroundColor = this.color;
    hoverName.style.border = this.colorBorder;
  }

};
