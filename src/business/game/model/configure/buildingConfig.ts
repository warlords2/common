import { IBuildingConfig } from "@core";
import { BuildingType } from "../buildingType";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class BuildingConfig implements IBuildingConfig{
    name: String;
    buildingsType: BuildingType[];
    examples: BuildingConfig[];

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