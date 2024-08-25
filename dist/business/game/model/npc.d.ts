import { INpc, NpcType } from "../../../core/index.js";
import { ValidationError } from "class-validator";
import { City } from "./city";
import { World } from "./world";
export declare class Npc implements INpc {
    name: String;
    npcType: NpcType;
    cities: City[];
    world: World;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
