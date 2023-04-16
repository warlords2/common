import { IsNotEmpty } from "class-validator";
import { IUser } from "@core";
import { Player } from "../game";


export class User implements IUser{
    @IsNotEmpty()
    name: String;
    players: Player[];
}