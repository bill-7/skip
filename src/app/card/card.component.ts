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
    const colours = [
      'f8bbd0', 'e1bee7', 'c5cae9', 'b3e5fc', 'b2dfdb', 'dcedc8',
      'fff59d', 'ffcc80', 'ffccbc',
    ]
    if (n > 12) return {
      background: "#f0f0f0",
      border: "5px solid #e5e5e5",
      elevation: 0
    }
    return {
      background: '#' + colours[n],

    }
  }
}
