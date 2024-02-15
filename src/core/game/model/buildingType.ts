import { ISize } from "./geometry/size";
import { IResourceType } from "./resourceType";
import { IUnitType } from "./unitType";

export interface IBuildingType{
    name: string;

    size: ISize;
    max_level: number;
    multiplier: number;
    multiplier_cost: number;
    initial: number;

    hasUnitGenerate: boolean;
    multiplier_unit_cost: number;
    multiplier_unit_time: number;
    unitsGenerate: IUnitType[];

    resources: IResourceType[];
    cost: IResourceType[];
    
}