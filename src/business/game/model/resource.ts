import { IResource, ResourceType } from "@core";
import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class Resource implements IResource{
    @IsNotEmpty()
    @IsNumber()
    amount: number;
    type: ResourceType;

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