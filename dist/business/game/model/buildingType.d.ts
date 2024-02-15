import { IBuildingType } from "../../../core/index.js";
import { ValidationError } from "class-validator";
import { Size } from "./geometry/size";
import { ResourceType } from "./resourceType";
import { UnitType } from "./unitType";
export declare class BuildingType implements IBuildingType {
    name: string;
    size: Size;
    max_level: number;
    multiplier: number;
    multiplier_cost: number;
    initial: number;
    hasUnitGenerate: boolean;
    multiplier_unit_cost: number;
    multiplier_unit_time: number;
    unitsGenerate: UnitType[];
    resources: ResourceType[];
    cost: ResourceType[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
