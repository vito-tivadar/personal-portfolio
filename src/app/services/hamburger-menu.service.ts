import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HamburgerMenuService {
  public stateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  public changeState(newState: boolean): void {
    this.stateChanged.emit(newState);
  }
}
