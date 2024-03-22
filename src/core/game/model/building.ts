import { IBuildingType } from "./buildingType";
import { IPosition } from "./geometry/position";

export interface IBuilding{
    type: IBuildingType;
    position: IPosition;
    level: number;
}