import { IBuildingType } from "../buildingType";

export interface IPlayerConfig{
    name: String;
    
    choiceProvince:boolean;
    choiceCityPosition: boolean;
    
    examples: IPlayerConfig[];
}