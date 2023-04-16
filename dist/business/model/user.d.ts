import { IUser } from "../../core/index.js";
import { Player } from "../game";
export declare class User implements IUser {
    name: String;
    players: Player[];
}
