import { Component, HostBinding, Input } from '@angular/core';
import { HamburgerMenuService } from 'src/app/services/hamburger-menu.service';
import { Link } from 'src/app/types/link.type';

@Component({
  selector: 'hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
})
export class HamburgerMenuComponent {
  @Input('links') links: Link[] = [
    {
      text: 'Github',
      href: 'https://github.com/vito-tivadar',
      iconSrc: '../../assets/icons/github.png',
    },
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vito-tivadar-a64040117/',
      iconSrc: '../../assets/icons/linked-in.png',
    },
    {
      text: 'Youtube',
      href: 'https://www.youtube.com/@vitotivadar',
      iconSrc: '../../assets/icons/youtube.png',
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/vito.tivadar/',
      iconSrc: '../../assets/icons/instagram.png',
    },
    {
      text: 'Facebook',
      href: 'https://www.facebook.com/vito.tivadar/',
      iconSrc: '../../assets/icons/facebook.png',
    },
  ];
  @Input('footer') footer: string = '';
  @HostBinding('style.right') right: string = '-100%';

  extended: boolean = false;

  constructor(private menuService: HamburgerMenuService) {
    menuService.stateChanged.subscribe((state: boolean) => {
      this.extended = state;
      if (state) this.right = '0px';
      else this.right = '-100%';
    });
  }
}
