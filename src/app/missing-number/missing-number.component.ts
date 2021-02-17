import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missing-number',
  templateUrl: './missing-number.component.html',
  styleUrls: ['./missing-number.component.css']
})
export class MissingNumberComponent implements OnInit {

  constructor() { }
  value: number;
  ngOnInit(): void {
    this.value = 0;
  }
  getValue(index: number) {
    let square = index * index;
    this.value = (index % 2 == 0) ? square - 1 : square + 1;    
  }

}
