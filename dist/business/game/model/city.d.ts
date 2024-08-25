import { ICity } from "../../../core/index.js";
import { ValidationError } from "class-validator";
import { Building } from "./building";
import { Position } from "./geometry/position";
import { Npc } from "./npc";
import { Resource } from "./resource";
import { Size } from "./geometry/size";
import { Province } from "./province";
import { World } from "./world";
export declare class City implements ICity {
    name: String;
    stability: number;
    owner: Npc;
    size: Size;
    province: Province;
    position: Position;
    buildings: Building[];
    resources: Resource[];
    world: World;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
