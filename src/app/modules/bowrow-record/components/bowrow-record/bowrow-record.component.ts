import { Component, OnInit } from '@angular/core';
import { ListReader } from '../../../../../app/interfaces/list-reader-data';

// import { ListReader } from 'src/app/interfaces/user-detail.ts';
@Component({
  selector: 'app-bowrow-record',
  template: `
 
        
 <h1>A Five Items Grid Layout</h1>

<div class="grid-container">
  <div class="grid-item item1">1</div>
  <div class="grid-item item2">2</div>
  <div class="grid-item item3">3</div>  
  <div class="grid-item item4">4</div>
  <div class="grid-item item5">5</div>
</div>
<div class="grid-container">
  <!-- <div class="grid-item item1">1</div>
  <div class="grid-item item2">2</div>
  <div class="grid-item item3">3</div>  
  <div class="grid-item item4">4</div> -->
  <div class="grid-item item1">1</div>
</div>
  `,
  styleUrls: ['./bowrow-record.component.css']
})
export class BowrowRecordComponent implements OnInit {
  listReader:ListReader [];
  constructor() { }

  ngOnInit(): void {
  }

}
