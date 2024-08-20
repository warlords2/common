import { IBuildingType } from "../buildingType";

export interface IBuildingConfig{
    name: String;
    buildingsType: IBuildingType[];
    examples: IBuildingConfig[];
}