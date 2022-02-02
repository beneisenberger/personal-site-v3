import { Component, OnInit } from '@angular/core';
import { dataSource } from '../events/dataSource';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  yearSelect: string = 'upcoming';
  dataSource: { text: string, year: string }[] = dataSource;

  ngOnInit(): void {
  }

  filter() {
    return this.dataSource.filter(d => d.year === this.yearSelect);
  }

}
