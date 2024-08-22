import { IBuildingType } from "./buildingType";
import { IPosition } from "./geometry/position";

export interface IBuilding{
    buildingType: IBuildingType;
    position: IPosition;
    level: number;
}