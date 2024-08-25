import { IResource } from "../../../core/index.js";
import { ValidationError } from "class-validator";
import { ResourceType } from "./resourceType";
export declare class Resource implements IResource {
    amount: number;
    resourceType: ResourceType;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
