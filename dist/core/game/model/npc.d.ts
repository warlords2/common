import { ICity } from "./city";
import { NpcType } from "./enum/npc_type";
import { IWorld } from "./world";
export interface INpc {
    name: String;
    npcType: NpcType;
    cities: ICity[];
    world: IWorld;
}
