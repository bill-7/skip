import { Component, OnInit } from '@angular/core';
import * as Colyseus from "colyseus.js"; // not necessary if included via <script> tag.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'skip-fe';


  client = new Colyseus.Client('wss://honey-breezy-piranha.glitch.me/:2567')

  ngOnInit() {
    // this.client.getAvailableRooms().then(console.log)
    this.client.joinOrCreate("my_room").then(function (room) {
      console.log(room.sessionId, "joined", room.name);

    }).catch(console.error)
  }
}
