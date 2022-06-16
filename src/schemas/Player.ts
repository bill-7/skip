// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';


export class Player extends Schema {
  @type(["number"]) public hand: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public stock: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public bench1: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public bench2: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public bench3: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public bench4: ArraySchema<number> = new ArraySchema<number>();
}