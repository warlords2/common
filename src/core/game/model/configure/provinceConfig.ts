import { ISize } from "../geometry/size";
import { ICityConfig } from "./cityConfig";

export interface IProvinceConfig{
    name: String;
    limitCity: number;
    genereteProvince: boolean;
    size: ISize;
    cityConfig: ICityConfig;
    examples: IProvinceConfig[];
}