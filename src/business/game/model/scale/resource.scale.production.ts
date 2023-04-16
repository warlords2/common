import { IResourceScale, ResourceType } from "@core";
import { Scale } from "./scale.production";

export class ResourceScale extends Scale implements IResourceScale{
    type_generate: ResourceType;
    constructor(values: any = {}) {
        super(values);
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}