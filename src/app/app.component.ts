import { Component, OnInit } from '@angular/core';
import * as Colyseus from "colyseus.js"; // not necessary if included via <script> tag.
import { MyRoomState } from 'src/schemas/MyRoomState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'skip-fe';

  messages: any[] = [];
  room!: Colyseus.Room<MyRoomState>
  client = new Colyseus.Client('wss://honey-breezy-piranha.glitch.me/:2567')

  ngOnInit() {
    this.client.joinOrCreate("my_room").then(room => {
      this.room = room as Colyseus.Room<MyRoomState>
      console.log(room.sessionId, "joined", room.name);

      room.onMessage("state", (broadcast) => {
        console.log(broadcast)
        // if (String(message).startsWith(this.room.sessionId))
        //   message += " (you)"
        // this.messages.push(message);
      });

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

  click(fruit: string) {
    if (this.room) this.room.send("state", { slot1: [1, 2, 3] })
  }
}
