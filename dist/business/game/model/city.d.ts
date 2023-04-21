import { ICity } from "../../../core/index.js";
import { ValidationError } from "class-validator";
import { Building } from "./building";
import { Position } from "./geometry/position";
import { Npc } from "./npc";
import { Resource } from "./resource";
export declare class City implements ICity {
    name: String;
    owner: Npc;
    position: Position;
    buildings: Building[];
    resources: Resource[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
