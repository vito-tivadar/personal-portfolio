import { Component, Input } from '@angular/core';
import { Tag } from 'src/app/types/tag.type';

@Component({
  selector: 'tag-box',
  templateUrl: './tag-box.component.html',
  styleUrls: ['./tag-box.component.css'],
})
export class TagBoxComponent {
  @Input('tag') tag: Tag = {
    text: '',
    color: 3,
  };

  assignColor(): string {
    let color: string = 'asd';

    switch (this.tag.color) {
      case 0:
        color = 'red';
        break;
      case 1:
        color = 'yellow';
        break;
      case 2:
        color = 'blue';
        break;
      case 3:
      default:
        color = 'green';
        break;
      case 4:
        color = 'purple';
        break;
      case 5:
        color = 'orange';
        break;
    }
    return `var(--status-${color})`;
  }
}
