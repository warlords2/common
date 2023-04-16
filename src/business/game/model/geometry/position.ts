import { IPosition } from "@core";
import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class Position implements IPosition{

    @IsNotEmpty()
    @IsNumber()
    x: number;
    
    @IsNotEmpty()
    @IsNumber()
    y: number;

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