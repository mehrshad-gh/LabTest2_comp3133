import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mission-filter',
  templateUrl: './mission-filter.component.html',
  styleUrls: ['./mission-filter.component.css']
})
export class MissionFilterComponent implements OnInit {
  years: string[] = [];
  selectedYear: string = '';

  @Output() yearSelected = new EventEmitter<string>();

  constructor(){}

  ngOnInit() {
    let currentYear = new Date().getFullYear();
    for(let i = currentYear; i >= 2016; i--){
      this.years.push(i.toString());
    }
  }

  getYears() {
    const currentYear = new Date().getFullYear();
    const startYear = 2016;
    for (let i = currentYear; i >= startYear; i--) {
      this.years.push(i.toString());
    }
  }

  onYearChange(event: Event) {
    this.selectedYear = (event.target as HTMLSelectElement).value;
    this.yearSelected.emit(this.selectedYear);
  }
}
