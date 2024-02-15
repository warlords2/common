import { IResourceType } from "../../../core/index.js";
import { ValidationError } from "class-validator";
export declare class ResourceType implements IResourceType {
    name: String;
    max_level: number;
    multiplier: number;
    initial: number;
    fixed: boolean;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
