import { IBuilding } from "../building";
import { ISize } from "../geometry/size";
import { IResource } from "../resource";
import { IUnit } from "../unit";
export interface ICityConfig {
    initialStability: number;
    initialSize: ISize;
    initialBuildings: IBuilding[];
    initialResources: IResource[];
    initialUnits: IUnit[];
    examples: ICityConfig[];
}
