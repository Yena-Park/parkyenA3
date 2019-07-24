import { Component, OnInit } from '@angular/core';
import { Parkyen } from '../parkyen';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  myInfo: Parkyen = {
    snumber: '991496627', sname: 'Yena Park', sloginname: 'parkyen',
    scampus: 'Oakville', title: 'Assignment3'
  }
  constructor() { }

  ngOnInit() {
  }

}
