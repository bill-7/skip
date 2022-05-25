// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';


export class Piles extends Schema {
  @type(["number"]) public play_1: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public play_2: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public play_3: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public play_4: ArraySchema<number> = new ArraySchema<number>();
}