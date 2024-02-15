import { ISize } from "@core";
import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class Size implements ISize{

    @IsNotEmpty()
    @IsNumber()
    width: number;

    @IsNotEmpty()
    @IsNumber()
    weight: number;

    height: number;

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