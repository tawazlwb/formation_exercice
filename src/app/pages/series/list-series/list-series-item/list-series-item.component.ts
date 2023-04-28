import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-list-series-item',
  templateUrl: './list-series-item.component.html',
  styleUrls: ['./list-series-item.component.scss'],
})
export class ListSeriesItemComponent {
  @Input() serie?: ISerie;

  @HostBinding('style.opacity')
  get componentOpacity() {
    return this.serie?.watched ? 0.5 : 1;
  }
}
