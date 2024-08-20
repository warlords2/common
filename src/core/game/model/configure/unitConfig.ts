import { IUnitType } from "../unitType";

export interface IUnitConfig{
    name: String;
    unitsType: IUnitType[];
    examples: IUnitConfig[];
}