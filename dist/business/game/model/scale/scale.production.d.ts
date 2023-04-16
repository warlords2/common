import { IScale } from "../../../../core/index.js";
import { ValidationError } from "class-validator";
export declare class Scale implements IScale {
    max_level: number;
    multiplier: number;
    initial: number;
    isValid(): Promise<ValidationError[][]>;
    constructor(values?: any);
}
