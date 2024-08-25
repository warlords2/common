import { IResourceConfig } from "../../../../core/index.js";
import { ResourceType } from "../resourceType";
import { ValidationError } from "class-validator";
export declare class ResourceConfig implements IResourceConfig {
    name: String;
    resourcesType: ResourceType[];
    examples: ResourceConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
