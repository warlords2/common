import { ISize } from "./geometry/size";
import { IBuilding } from "./building";
import { IPosition } from "./geometry/position";
import { INpc } from "./npc";
import { IResource } from "./resource";
import { IWorld } from "./world";
import { IProvince } from "./province";

export interface ICity{
    name: String;
    stability: number;
    owner: INpc;
    size: ISize;
    province: IProvince;
    position: IPosition;
    buildings: IBuilding[];
    resources: IResource[];
}