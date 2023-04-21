import { IScale } from "@core";
import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class Scale implements IScale{
    @IsNotEmpty()
    @IsNumber()
    max_level: number;
    @IsNotEmpty()
    @IsNumber()
    multiplier: number;
    @IsNotEmpty()
    @IsNumber()
    initial: number;

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