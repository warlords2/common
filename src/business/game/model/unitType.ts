import { IUnitType } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";

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
    foodConsumption: number;

    @IsNotEmpty()
    currencyConsumption: number;


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
