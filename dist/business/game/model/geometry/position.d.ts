import { IPosition } from "../../../../core/index.js";
import { ValidationError } from "class-validator";
export declare class Position implements IPosition {
    x: number;
    y: number;
    isValid(): Promise<ValidationError[][]>;
    constructor(values?: any);
}
