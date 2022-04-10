import { Component, OnInit } from '@angular/core';
import { ListReader } from '../../../../../app/interfaces/list-reader-data';

// import { ListReader } from 'src/app/interfaces/user-detail.ts';
@Component({
  selector: 'app-bowrow-record',
  template: `
  <div class="header">
  <h2>Blog Name</h2>
  </div>
  <div class="container">
    <div class="g-block-1"><mat-card>Simple card 1</mat-card></div>
    <div class="g-block-2"><mat-card>Simple card 2</mat-card></div>
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
