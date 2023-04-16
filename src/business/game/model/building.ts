import { BuildingType, IBuilding } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";
import { Position } from "./geometry/position";

export class Building implements IBuilding{
    type: BuildingType;
    @IsNotEmpty()
    position: Position;

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