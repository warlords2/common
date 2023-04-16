import { User } from "../../model";
import { Npc } from "./npc";

export class Player extends Npc{
    user: User;
}