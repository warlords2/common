import { INpc, NpcType } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";

export class Npc implements INpc{
    @IsNotEmpty()
    name: String;
    type: NpcType;

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