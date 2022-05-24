import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as Colyseus from "colyseus.js"; // not necessary if included via <script> tag.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'skip-fe';

  messages: any[] = [];
  room!: Colyseus.Room<unknown>
  client = new Colyseus.Client('wss://honey-breezy-piranha.glitch.me/:2567')

  ngOnInit() {
    this.client.joinOrCreate("my_room").then(room => {
      this.room = room
      console.log(room.sessionId, "joined", room.name);

      room.onMessage("*", (message) => {
        if (String(message).startsWith(this.room.sessionId))
          message += " (you)"
        this.messages.push(message);
      });

    }).catch(console.error)
  }

  click(fruit: string) {
    if (this.room) this.room.send(fruit)
  }
}
