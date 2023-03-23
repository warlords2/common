/// <reference types="node" />
import { City } from "./city";
import { Position } from "./geometry/position";
export interface Province {
    name: String;
    position: Position;
    buffs: Buffer[];
    cities: City[];
}
