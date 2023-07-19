import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { HamburgerMenuService } from './../../services/hamburger-menu.service';

@Component({
  selector: 'hamburger-icon',
  templateUrl: './hamburger-icon.component.html',
  styleUrls: ['./hamburger-icon.component.css'],
})
export class HamburgerIconComponent {
  @Output('onChange') onChange = new EventEmitter<boolean>();
  extended: boolean = false;

  constructor(private menuService: HamburgerMenuService) {}

  @HostListener('click', [])
  onClick() {
    this.extended = !this.extended;
    this.menuService.changeState(this.extended);
  }
}
