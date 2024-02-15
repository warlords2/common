import { ISize } from "../../../../core/index.js";
import { ValidationError } from "class-validator";
export declare class Size implements ISize {
    width: number;
    weight: number;
    height: number;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
