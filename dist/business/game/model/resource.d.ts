import { IResource, IResourceType } from "../../../core/index.js";
import { ValidationError } from "class-validator";
export declare class Resource implements IResource {
    amount: number;
    type: IResourceType;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
