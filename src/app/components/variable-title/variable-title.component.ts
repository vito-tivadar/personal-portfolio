import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'variable-title',
  templateUrl: './variable-title.component.html',
  styleUrls: ['./variable-title.component.css'],
})
export class VariableTitleComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('uppercase') uppercase: boolean = false;
  titleLetters: string[] = [];
  horizontalMousePercentage: number = 0;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.titleLetters = [...this.title];
  }

  @HostListener('window:pointermove', ['$event'])
  onMouseMove(pointerEvent: PointerEvent) {
    this.horizontalMousePercentage = Math.round((pointerEvent.clientX / this.document.body.clientWidth) * 100);
  }

  // @HostListener('window:pointermove', ['$event'])
  // onTouchMove(pointerEvent: PointerEvent) {
  //   console.log(pointerEvent.clientX, pointerEvent.clientY);
  // }

  calculateFontSettings(i: number, c: number, wghtRange: number[], wdthRange: number[]) {
    let paddingInPercentage = 0.5;

    let interval = Math.round((100 / c) * 100) / 100;
    let letterPercentage =
      (paddingInPercentage * 100) / 2 + i * interval * paddingInPercentage - interval * (paddingInPercentage / 2);

    let weight: number = (40 - Math.abs(letterPercentage - this.horizontalMousePercentage)) / 40;

    let calculatedWght = wghtRange[0] + (wghtRange[1] - wghtRange[0]) * weight;
    let calculatedWdth = wdthRange[0] + (wdthRange[1] - wdthRange[0]) * weight;

    let outputString = `"wdth" ${Math.round(calculatedWdth)}, "wght" ${Math.round(calculatedWght)}`;

    // console.log(outputString);

    return outputString;
  }

  test(i: number, c: number): number {
    let paddingInPercentage = 0.5;

    let interval = Math.round((100 / c) * 100) / 100;
    let o = (paddingInPercentage * 100) / 2 + i * interval * paddingInPercentage - interval * (paddingInPercentage / 2);
    // o = o - interval / 2;
    // o = ((i + 1) / c) * 100;
    return Math.round(o);
  }
}

// calculateFontWeight(i: number, c: number, wghtRange: number[]): number {
//   // wght   min: 100     max: 900     step: 1
//   let letterPercentage: number = (i / c) * 100;
//   let weight: number = (100 - Math.abs(letterPercentage - this.horizontalMousePercentage)) / 100;

//   let calculatedWght = wghtRange[0] + (wghtRange[1] - wghtRange[0]) * weight;

//   return calculatedWght;
// }

// calculateFontWidth(i: number, c: number, wdthRange: number[]): number {
//   // wdth   min: 100     max: 200     step: 0.1
//   let letterPercentage: number = (i / c) * 100;
//   let weight: number = (100 - Math.abs(letterPercentage - this.horizontalMousePercentage)) / 100;

//   let calculatedWdth = wdthRange[0] + (wdthRange[1] - wdthRange[0]) * weight;

//   return calculatedWdth;
// }
