import { IProvinceConfig } from "../../../../core/index.js";
import { Size } from "../geometry/size";
import { CityConfig } from "./cityConfig";
import { ValidationError } from "class-validator";
export declare class ProvinceConfig implements IProvinceConfig {
    name: String;
    limitCity: number;
    totalNpcsPeerProvince: number;
    genereteProvince: boolean;
    size: Size;
    cityConfig: CityConfig;
    examples: ProvinceConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
