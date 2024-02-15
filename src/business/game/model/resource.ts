import { IResource, IResourceType } from "@core";
import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

import { Column } from "typeorm";

export class Resource implements IResource{

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @Column()
    type: IResourceType;

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