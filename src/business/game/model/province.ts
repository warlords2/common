import { IProvince } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";
import { City } from "./city";
import { Position } from "./geometry/position";
import { Size } from "./geometry/size";
import { World } from "./world";

export class Province implements IProvince{
    @IsNotEmpty()
    name: String;
    
    @IsNotEmpty()
    position: Position;
    
    @IsNotEmpty()
    size: Size;
    
    world: World;
    cities: City[];

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