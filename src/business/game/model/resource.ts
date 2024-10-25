import { IResource, IResourceType } from "@core";
import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

import { ResourceType } from "./resourceType";

export class Resource implements IResource{

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    resourceType: ResourceType;

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