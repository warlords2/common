import { ICityConfig } from "@core";
import { Size } from "../geometry/size";
import { Building } from "../building";
import { Resource } from "../resource";
import { Unit } from "../unit";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class CityConfig implements ICityConfig{
    initialStability: number;
    initialSize: Size;
    initialBuildings: Building[];
    initialResources: Resource[];
    initialUnits: Unit[];
    examples: ICityConfig[];

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