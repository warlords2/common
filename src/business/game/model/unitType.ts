import { IUnitType } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";
import { Cost } from "./cost";

export class UnitType implements IUnitType{
    
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    damage: number;

    @IsNotEmpty()
    health: number;

    @IsNotEmpty()
    agility: number;

    @IsNotEmpty()
    speed: number;

    @IsNotEmpty()
    cargoCapacity: number;

    @IsNotEmpty()
    trainingTime: number;

    @IsNotEmpty()
    cost: Cost[];

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
