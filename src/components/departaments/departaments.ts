import { Component, Input, Output,} from '@angular/core';

@Component({
  selector: 'departaments',
  templateUrl: 'departaments.html'
})
export class DepartamentsComponent {

  @Input() departaments: any[] = [];

  constructor() {}

}
