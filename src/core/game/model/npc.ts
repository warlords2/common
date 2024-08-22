import { ICity } from "./city";
import { NpcType } from "./enum/npc_type";
import { IWorld } from "./world";

export interface INpc{
    name: String;
    // @todo colocar faccao aqui para ter facções em jogador e npc's
    
    npcType: NpcType;
    cities: ICity[];
    world: IWorld;
}