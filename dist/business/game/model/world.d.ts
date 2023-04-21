import { IWorld } from "../../../core/index.js";
import { ValidationError } from "class-validator";
import { Market } from "./market";
import { Npc } from "./npc";
import { Player } from "./player";
import { Province } from "./province";
export declare class World implements IWorld {
    name: string;
    market: Market;
    provinces: Province[];
    npcs: Npc[];
    players: Player[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
