import { Component, OnInit } from '@angular/core';
import * as Colyseus from "colyseus.js"; // not necessary if included via <script> tag.
import { MyRoomState } from 'src/schemas/MyRoomState';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Piles } from 'src/schemas/Piles';
import { Player } from 'src/schemas/Player';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  default = () => ({ hand: [] as number[], stock: [] as number[] })

  messages = []
  piles: Piles = new Piles
  player = this.default()
  opponent = this.default()
  room!: Colyseus.Room<MyRoomState>

  // client = new Colyseus.Client('wss://honey-breezy-piranha.glitch.me/:2567')
  client = new Colyseus.Client('ws://localhost:2567')

  ps = () => this.room.state.players

  ngOnInit() {
    this.client.joinOrCreate("my_room").then(room => {
      this.room = room as Colyseus.Room<MyRoomState>
      console.log(room.sessionId, "joined", room.name);

      room.onStateChange((_: unknown) => {
        const opId = [...this.ps().keys()].find(k => k != room.sessionId)
        const p = this.ps().get(room.sessionId)
        const op = this.ps().get(opId!)
        if (p) {
          this.player.hand = [...p.hand.values()]
          this.player.stock = [...p.stock.values()]
        }
        if (op) {
          this.opponent.hand = [...op.hand.values()]
          this.opponent.stock = [...op.stock.values()]
        }
      });

    }).catch(console.error)
  }

  draw() {
    this.room?.send("draw")
  }

  drop(event: any, source: string) {
    console.log(event)

  }
}
