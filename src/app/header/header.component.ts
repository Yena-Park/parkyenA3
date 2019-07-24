import { Component, OnInit } from '@angular/core';
import { Parkyen } from '../parkyen';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myInfo: Parkyen = {
    snumber: '991496627', sname: 'Yena Park', sloginname: 'parkyen',
    scampus: 'Oakville', title: 'Assignment3'
  }

  constructor() { }

  ngOnInit() {
  }

}
