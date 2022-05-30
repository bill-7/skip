import { Component, OnInit } from '@angular/core';
import * as Colyseus from "colyseus.js"; // not necessary if included via <script> tag.
import { MyRoomState } from 'src/schemas/MyRoomState';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'skip-fe';
  messages = []
  layout = [
    { cols: 3, rows: 1 },
    { cols: 3, rows: 1 },
    { cols: 3, rows: 1 },
  ]
  room!: Colyseus.Room<MyRoomState>
  // client = new Colyseus.Client('wss://honey-breezy-piranha.glitch.me/:2567')
  client = new Colyseus.Client('ws://localhost:2567')


  ngOnInit() {
    this.client.joinOrCreate("my_room").then(room => {
      this.room = room as Colyseus.Room<MyRoomState>
      console.log(room.sessionId, "joined", room.name);

      room.onStateChange((changes) => {
        console.log(changes)
        // changes.forEach(change => {
        //   console.log(change.field);
        //   console.log(change.value);
        //   console.log(change.previousValue);
        // });
      });

    }).catch(console.error)
  }

  draw() {
    this.room?.send("draw")
  }
}
