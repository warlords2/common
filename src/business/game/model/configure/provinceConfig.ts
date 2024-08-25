import { ICityConfig, IProvinceConfig, ISize } from "@core";
import { Size } from "../geometry/size";
import { CityConfig } from "./cityConfig";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class ProvinceConfig implements IProvinceConfig{
    name: String;
    limitCity: number;
    totalNpcsPeerProvince: number;
    genereteProvince: boolean;
    size: Size;
    cityConfig: CityConfig;
    examples: ProvinceConfig[];

    isValid(): Promise<ValidationError[]>{

        let groups = undefined;

        let isValid = validate(this, { groups , validationError: { target: false }});

        return isValid;
    }

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
        return;
        }
        Object.assign(this, values);
    }
}