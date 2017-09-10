import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'citys',
  templateUrl: 'citys.html'
})
export class CitysComponent {

  text: string;
  @Input() citys: any[] = [];
  @Output() selected = new EventEmitter();

  constructor() {
  }

  change(city: any){
    this.selected.emit(city.value);
  }
}
