import { BuildingType } from "./enum/building_type";
import { IPosition } from "./geometry/position";
export interface IBuilding {
    type: BuildingType;
    position: IPosition;
}
