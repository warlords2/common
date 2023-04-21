import { BuildingType, IBuilding } from "../../../core/index.js";
import { ValidationError } from "class-validator";
import { Position } from "./geometry/position";
export declare class Building implements IBuilding {
    type: BuildingType;
    position: Position;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
