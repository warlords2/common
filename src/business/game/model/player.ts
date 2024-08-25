import { IPlayer } from "@core";
import { User } from "../../model";
import { Npc } from "./npc";
import { IsNotEmpty } from "class-validator";

export class Player extends Npc implements IPlayer{
    
  @IsNotEmpty()
    user: User;

    constructor(values: any = {}) {
        super(values)
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}