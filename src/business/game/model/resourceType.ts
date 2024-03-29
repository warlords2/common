import { IResourceType } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";

export class ResourceType implements IResourceType{
    
    @IsNotEmpty()
    name: String;

    max_level: number;
    
    @IsNotEmpty()
    multiplier: number;
    
    @IsNotEmpty()
    initial: number;

    fixed = false;

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
