import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetValue()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  counter = 10;
  RESET_VALUE = 10;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public resetValue(): void {
    this.counter = this.RESET_VALUE;
  }
}
