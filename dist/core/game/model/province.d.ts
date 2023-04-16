import { ICity } from "./city";
import { IPosition } from "./geometry/position";
export interface IProvince {
    name: String;
    position: IPosition;
    cities: ICity[];
}
