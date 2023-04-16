import { IPlayer } from "@core";
import { User } from "../../model";
import { Npc } from "./npc";

export class Player extends Npc implements IPlayer{
    user: User;
    constructor(values: any = {}) {
        super(values)
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}