import { Component, HostListener, Input } from '@angular/core';
import { Project } from 'src/app/types/project.type';

@Component({
  selector: 'carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css'],
})
export class CarouselCardComponent {
  @Input('card') card: Project = {
    title: '',
    description: '',
    image_url: '',
    links: [],
    tags: [],
  };

  private _isActive: boolean = false;
  @Input('isActive')
  set isActive(value: boolean) {
    this._isActive = value;

    if (value == false) this.isExtended = false;
  }
  get isActive(): boolean {
    return this._isActive;
  }

  isExtended: boolean = false;

  @HostListener('click', ['$event'])
  onClick(mouseEvent: MouseEvent): void {
    if (this.isActive) this.isExtended = !this.isExtended;
  }
}
