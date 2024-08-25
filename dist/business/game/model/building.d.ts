import { IBuilding } from "../../../core/index.js";
import { ValidationError } from "class-validator";
import { Position } from "./geometry/position";
import { BuildingType } from "./buildingType";
export declare class Building implements IBuilding {
    buildingType: BuildingType;
    position: Position;
    level: number;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
