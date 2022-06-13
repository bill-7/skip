// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { Piles } from './Piles';
import { Player } from './Player'

export class MyRoomState extends Schema {
  @type({ map: Player }) public players: MapSchema<Player> = new MapSchema<Player>();
  @type({ map: Piles }) public piles: MapSchema<Piles> = new MapSchema<Piles>();

}