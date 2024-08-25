import { ICity } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";
import { Building } from "./building";
import { Position } from "./geometry/position";
import { Npc } from "./npc";
import { Resource } from "./resource";
import { Size } from "./geometry/size";
import { Province } from "./province";
import { World } from "./world";

export class City implements ICity{
    @IsNotEmpty()
    name: String;
    @IsNotEmpty()
    stability: number;
    owner: Npc;
    @IsNotEmpty()
    size: Size;
    province: Province;
    position: Position;
    buildings: Building[];
    resources: Resource[];
    world: World;
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