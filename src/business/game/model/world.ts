import { IWorld } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";
import { Market } from "./market";
import { Npc } from "./npc";
import { Player } from "./player";
import { Province } from "./province";

export class World implements IWorld{
    @IsNotEmpty()
    name: string;
    market: Market;
    provinces: Province[];
    npcs: Npc[];
    players: Player[];
    
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