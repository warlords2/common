import { ICityConfig } from "../../../../core/index.js";
import { Size } from "../geometry/size";
import { Building } from "../building";
import { Resource } from "../resource";
import { Unit } from "../unit";
import { ValidationError } from "class-validator";
export declare class CityConfig implements ICityConfig {
    initialStability: number;
    initialSize: Size;
    initialBuildings: Building[];
    initialResources: Resource[];
    initialUnits: Unit[];
    examples: ICityConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
