import { IBuildingConfig } from "../../../../core/index.js";
import { BuildingType } from "../buildingType";
import { ValidationError } from "class-validator";
export declare class BuildingConfig implements IBuildingConfig {
    name: String;
    buildingsType: BuildingType[];
    examples: BuildingConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
