import { ICity } from "./city";
import { NpcType } from "./enum/npc_type";
import { IWorld } from "./world";
export interface INpc {
    name: String;
    type: NpcType;
    cities: ICity[];
    world: IWorld;
}
