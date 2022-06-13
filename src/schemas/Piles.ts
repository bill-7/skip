// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';


export class Piles extends Schema {
  @type(["number"]) public pile1: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public pile2: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public pile3: ArraySchema<number> = new ArraySchema<number>();
  @type(["number"]) public pile4: ArraySchema<number> = new ArraySchema<number>();
}