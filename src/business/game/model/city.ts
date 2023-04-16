import { Building } from "./building";
import { Position } from "./geometry/position";
import { Npc } from "./npc";
import { Resource } from "./resource";

export class City{
    name: String;
    owner: Npc;
    position: Position;
    buildings: Building[];
    resources: Resource[];
}