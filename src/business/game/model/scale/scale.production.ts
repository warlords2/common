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

    isValid(): Promise<ValidationError[][]>{

      let isDefaultValid = validate(this,{ groups: undefined });

      return Promise.all([ isDefaultValid ]);
    }

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}