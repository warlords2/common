import { IUser } from "../../model";
import { INpc } from "./npc";
import { IWorld } from "./world";

export interface IPlayer extends INpc{
    user: IUser;
}