// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { Player } from './Player'
import { Piles } from './Piles'

export class MyRoomState extends Schema {
  @type({ map: Player }) public players: MapSchema<Player> = new MapSchema<Player>();
  @type({ map: Piles }) public piles: MapSchema<Piles> = new MapSchema<Piles>();
}