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
    if (n > 12) return {
      background: "#f0f0f0",
      border: "5px solid #e5e5e5"
    }
    return {
      background: `hsl(${(n - 1) * 25}, 100%, 78%)`
    }
  }
}
