import { Component, Input } from '@angular/core';
import { section } from 'src/app/types/section.type';

@Component({
  selector: 'titles-sidebar',
  templateUrl: './titles-sidebar.component.html',
  styleUrls: ['./titles-sidebar.component.css'],
})
export class TitlesSidebarComponent {
  @Input('progressPercentage') progressPercentage: number = 0;
  @Input('sections') sections: section[] = [];
  @Input('activeTitle') activeTitle: number = 0;

  constructor() {}

  countAllLetters(): number {
    let letterCount = 0;
    for (let i = 0; i < this.sections.length; i++) {
      letterCount += this.sections[i].title.length;
    }

    return letterCount;
  }

  NgOnInit() {
    console.log(this.sections.length);
  }

  generateSectionID(sectionTitle: string): string {
    return '#' + sectionTitle.replace(' ', '-').toLowerCase();
  }
}
