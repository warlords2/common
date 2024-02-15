import { ISize } from "./geometry/size";
import { IResourceType } from "./resourceType";

export interface IBuildingType{
    name: string;

    size: ISize;
    max_level: number;
    multiplier: number;
    multiplier_cost: number;
    initial: number;

    resources: IResourceType[];
    cost: IResourceType[];
    
}