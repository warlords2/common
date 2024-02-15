import { ISize } from "./geometry/size";
import { ICity } from "./city";
import { IPosition } from "./geometry/position";

export interface IProvince{
    name: String;
    size: ISize;
    position: IPosition;
    cities: ICity[];
}