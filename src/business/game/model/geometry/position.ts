import { IPosition } from "@core";
import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class Position implements IPosition{

    @IsNotEmpty()
    @IsNumber()
    x: number;
    
    @IsNotEmpty()
    @IsNumber()
    y: number;

    @IsNotEmpty()
    @IsNumber()
    z: number;

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