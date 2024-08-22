import { ICity } from "../city";
import { NpcType } from "../enum/npc_type";
import { ICityConfig } from "./cityConfig";

export interface INPCTypeonfig{
    name: String;
    npcType: NpcType;
    minPeerProvince: number;
    maxPeerProvince:number;
    aggressionLevel: number;
    interactionDistance: number;
    useMarket: boolean;
    cityInitial:ICityConfig;
}
