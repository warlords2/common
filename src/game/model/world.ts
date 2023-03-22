import { Buff } from "./buff";
import { Market } from "./market";
import { Npc } from "./npc";
import { Player } from "./player";
import { Province } from "./province";

export interface World{
    name: string;
    market: Market;
    buffs: Buff[];
    provinces: Province[];
    npcs: Npc[];
    players: Player[];
 }