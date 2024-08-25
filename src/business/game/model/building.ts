import { IBuilding } from "@core";
import { IsNotEmpty, IsNumber, isNumber, validate, ValidationError } from "class-validator";
import { Position } from "./geometry/position";
import { BuildingType } from "./buildingType";

export class Building implements IBuilding{
    
    @IsNotEmpty()
    buildingType: BuildingType;

    @IsNotEmpty()
    position: Position;

    @IsNotEmpty()
    @IsNumber()
    level: number;
    
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