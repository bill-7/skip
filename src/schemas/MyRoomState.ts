// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { Player } from './Player'

export class MyRoomState extends Schema {
  @type({ map: Player }) public players: MapSchema<Player> = new MapSchema<Player>();
  @type(["number"]) public pile_1: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public pile_2: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public pile_3: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public pile_4: ArraySchema<number> = new ArraySchema<number>();
}