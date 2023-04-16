import { INpc, NpcType } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";

export class Npc implements INpc{
    @IsNotEmpty()
    name: String;
    type: NpcType;

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