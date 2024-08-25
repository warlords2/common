import { IBuildingType } from "./buildingType";
import { IWorldConfig } from "./configure/worldConfig";
import { IMarket } from "./market";
import { INpc } from "./npc";
import { IPlayer } from "./player";
import { IProvince } from "./province";
import { IResourceType } from "./resourceType";
import { IUnitType } from "./unitType";

export interface IWorld{
    name: string;
    market: IMarket;
    provinces: IProvince[];
    worldConfig: IWorldConfig;
    npcs: INpc[];
    players: IPlayer[];
 }