import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() n!: number;

  ngOnInit(): void {
    if (this.n == undefined)
      this.n = Math.floor(Math.random() * 12)
  }

  colour(n: number) {
    //list of 12 rainbow colours flowing from red to pink
    const colours = [
      'f8bbd0',
      'e1bee7',
      'c5cae9',
      'b3e5fc',
      'b2dfdb',
      'dcedc8',
      'fff59d',
      'ffcc80',
      'ffccbc',

    ]
    return '#' + colours[n]
  }
}
