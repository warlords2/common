import { IProvince } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";
import { City } from "./city";
import { Position } from "./geometry/position";

export class Province implements IProvince{
    @IsNotEmpty()
    name: String;
    @IsNotEmpty()
    position: Position;
    cities: City[];

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