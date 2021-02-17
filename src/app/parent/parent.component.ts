import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  value = '';
  ngOnInit(): void {
  }
  update(event) {    
    this.value = event.target.value;
  }

}
