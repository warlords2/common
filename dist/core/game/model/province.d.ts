import { ISize } from "./geometry/size";
import { ICity } from "./city";
import { IPosition } from "./geometry/position";
import { IWorld } from "./world";
export interface IProvince {
    name: String;
    size: ISize;
    position: IPosition;
    world: IWorld;
    cities: ICity[];
}
