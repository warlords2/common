import { IPlayer } from "../../../core/index.js";
import { User } from "../../model";
import { Npc } from "./npc";
export declare class Player extends Npc implements IPlayer {
    user: User;
    constructor(values?: any);
}
