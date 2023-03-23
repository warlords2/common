import { Player } from "../game";
import { World } from "../game/model/world"

export interface User{
    name: String,
    players: Player[];
}