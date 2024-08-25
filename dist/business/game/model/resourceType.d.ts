import { IResourceType } from "../../../core/index.js";
import { ValidationError } from "class-validator";
export declare class ResourceType implements IResourceType {
    name: String;
    max_level: number;
    multiplier: number;
    initial: number;
    hasMaxLevel: boolean;
    maxLevel: number;
    noMarket: boolean;
    fixed: boolean;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
