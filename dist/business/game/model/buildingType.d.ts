import { IBuildingType } from "../../../core/index.js";
import { ValidationError } from "class-validator";
import { Size } from "./geometry/size";
import { ResourceType } from "./resourceType";
export declare class BuildingType implements IBuildingType {
    name: string;
    size: Size;
    max_level: number;
    multiplier: number;
    multiplier_cost: number;
    initial: number;
    resources: ResourceType[];
    cost: ResourceType[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
