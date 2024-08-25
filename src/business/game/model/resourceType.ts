import { IResourceType } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";
import { World } from "./world";

export class ResourceType implements IResourceType{
    
    @IsNotEmpty()
    name: String;
    
    @IsNotEmpty()
    max_level: number;
    
    @IsNotEmpty()
    multiplier: number;
    
    @IsNotEmpty()
    initial: number;

    @IsNotEmpty()
    hasMaxLevel: boolean;

    @IsNotEmpty()
    maxLevel: number;

    @IsNotEmpty()
    noMarket:boolean;

    @IsNotEmpty()
    fixed:boolean;

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
