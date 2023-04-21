import { IProvince } from "../../../core/index.js";
import { ValidationError } from "class-validator";
import { City } from "./city";
import { Position } from "./geometry/position";
export declare class Province implements IProvince {
    name: String;
    position: Position;
    cities: City[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
