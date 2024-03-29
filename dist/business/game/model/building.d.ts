import { IBuilding } from "../../../core/index.js";
import { ValidationError } from "class-validator";
import { Position } from "./geometry/position";
import { BuildingType } from "./buildingType";
export declare class Building implements IBuilding {
    type: BuildingType;
    position: Position;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
