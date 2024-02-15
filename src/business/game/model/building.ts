import { IBuildingType, IBuilding } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";
import { Position } from "./geometry/position";

export class Building implements IBuilding{

    @IsNotEmpty()
    type: IBuildingType;

    @IsNotEmpty()
    position: Position;

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