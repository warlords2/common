import { ISize } from "./geometry/size";
import { IBuilding } from "./building";
import { IPosition } from "./geometry/position";
import { INpc } from "./npc";
import { IResource } from "./resource";

export interface ICity{
    name: String;
    owner: INpc;
    size: ISize;
    position: IPosition;
    buildings: IBuilding[];
    resources: IResource[];
}