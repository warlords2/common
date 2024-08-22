import { NpcType } from "../enum/npc_type";
import { INPCTypeonfig } from "./npcTypeConfig";

export interface INPCConfig{
    name: String;
    aggressionLevel: number;
    interactionDistance: number;
    npcTypes: INPCTypeonfig[];
    examples: INPCConfig[];
}