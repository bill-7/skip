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
  }

  colour(n: number) {
    //0 - skip
    //1-12 - cards
    //13 - back
    //14 - empty
    if (n == 14) return {
      background: "#f0f0f0",
      border: "5px solid #e5e5e5"
    }
    if (n == 13) return {
      background: `linear-gradient(180deg, rgba(255,90,90,1) 0%, rgba(255,179,103,1) 20%, rgba(255,253,116,1) 40%, rgba(141,255,130,1) 60%, rgba(139,213,234,1) 80%, rgba(206,157,255,1) 100%)`
    }
    if (n <= 12 && n >= 1) return {
      background: `hsl(${(n - 1) * 25}, 100%, 78%)`
    }
    if (n == 0) return {
      background: `linear-gradient(0deg, rgba(246,245,148,1) 0%, rgba(255,158,0,1) 100%)`
    }
    return
  }
}
