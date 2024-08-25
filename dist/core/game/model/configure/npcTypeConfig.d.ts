import { NpcType } from "../enum/npc_type";
import { ICityConfig } from "./cityConfig";
export interface INPCTypeConfig {
    name: String;
    npcType: NpcType;
    minPeerProvince: number;
    maxPeerProvince: number;
    aggressionLevel: number;
    interactionDistance: number;
    useMarket: boolean;
    cityInitial: ICityConfig;
}
