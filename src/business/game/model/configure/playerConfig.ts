import { IPlayerConfig } from "@core";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class PlayerConfig implements IPlayerConfig{
    name: String;
    
    choiceProvince:boolean;
    choiceCityPosition: boolean;
    
    examples: PlayerConfig[];

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