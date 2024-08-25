import { IResourceConfig, IResourceType } from "@core";
import { ResourceType } from "../resourceType";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class ResourceConfig implements IResourceConfig{
    name: String;
    resourcesType: ResourceType[];
    examples: ResourceConfig[];

    isValid(): Promise<ValidationError[]>{

        let groups = undefined;

        let isValid = validate(this, { groups , validationError: { target: false }});

        return isValid;
    }

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
        return;
        }
        Object.assign(this, values);
    }
}