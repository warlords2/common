import { IResource, ResourceType } from "../../../core/index.js";
import { ValidationError } from "class-validator";
export declare class Resource implements IResource {
    amount: number;
    type: ResourceType;
    isValid(): Promise<ValidationError[][]>;
    constructor(values?: any);
}
