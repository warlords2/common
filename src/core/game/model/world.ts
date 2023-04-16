import { IMarket } from "./market";
import { INpc } from "./npc";
import { IPlayer } from "./player";
import { IProvince } from "./province";

export interface IWorld{
    name: string;
    market: IMarket;
    provinces: IProvince[];
    npcs: INpc[];
    players: IPlayer[];
 }