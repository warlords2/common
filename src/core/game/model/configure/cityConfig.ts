import { IBuilding } from "../building";
import { ISize } from "../geometry/size";
import { IResource } from "../resource";

export interface ICityConfig{
    initialStability: number;
    initialSize: ISize;
    initialBuildings: IBuilding[];
    initialResources: IResource[];
    examples: ICityConfig[];
}