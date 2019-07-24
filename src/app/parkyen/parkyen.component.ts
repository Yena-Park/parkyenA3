import { Component, OnInit } from '@angular/core';
import { MYBOOKS } from '../../assets/data/myBooks'
import { BookInfo } from '../bookInfo';

@Component({
  selector: 'app-parkyen',
  templateUrl: './parkyen.component.html',
  styleUrls: ['./parkyen.component.css']
})
export class ParkyenComponent {
  myBooks = MYBOOKS;

  constructor() { }

  ngAfterViewInit(){
    for ( let x = 1; x < this.myBooks.length; x++ ) {
      var div = document.getElementById(`book-${x}`);
      div.style.display = 'none';
    }
  }

  onClickBook(index) {
    var selectedDiv = document.getElementById(`book-${index}`);
    selectedDiv.style.display = ''
    for (let x = 0; x < this.myBooks.length; x++ ) {
      if (x !== index) {
        var div = document.getElementById(`book-${x}`);
        div.style.display = 'none';
      }
    }
  }

}
