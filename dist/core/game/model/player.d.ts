import { IUser } from "../../model";
import { INpc } from "./npc";
export interface IPlayer extends INpc {
    user: IUser;
}
