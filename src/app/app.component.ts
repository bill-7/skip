import { Component, OnInit } from '@angular/core';
import * as Colyseus from "colyseus.js"; // not necessary if included via <script> tag.
import { MyRoomState } from 'src/schemas/MyRoomState';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  default = () => ({ hand: [] as number[], stock: [] as number[] })

  messages = []
  piles: number[][] = []
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

      room.onStateChange(this.handleStateUpdate);

    }).catch(console.error)
  }

  handleStateUpdate = (_: unknown) => {
    const opId = [...this.ps().keys()].find(k => k != this.room.sessionId)
    const p = this.ps().get(this.room.sessionId)
    const op = this.ps().get(opId!)
    if (p) {
      this.player.hand = [...p.hand.values()]
      this.player.stock = [...p.stock.values()]
    }
    if (op) {
      this.opponent.hand = [...op.hand.values()].map(() => 13)
      this.opponent.stock = [...op.stock.values()]
    }
    [0, 1, 2, 3].map(i => this.piles = [...(this.room.state as any)["pile" + i].values()])
  }

  draw() {
    this.room?.send("draw")
  }

  updateServerState() {
    this.room.send("state", {
      "player.hand": this.player.hand,
      "player.stock": this.player.stock,
      "piles": this.piles
    })
  }

  drop(event: CdkDragDrop<number[]>, prev: string, next: string) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.updateServerState()

    }
  }
}
