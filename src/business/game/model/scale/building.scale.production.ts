import { IBuildingScale } from "@core";
import { ResourceScale } from "./resource.scale.production";
import { Scale } from "./scale.production";

export class BuildingScale extends Scale implements IBuildingScale{
    resources: ResourceScale[];
    constructor(values: any = {}) {
        super(values);
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}