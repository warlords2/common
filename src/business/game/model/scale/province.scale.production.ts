import { IProvinceScale } from "@core";
import { ResourceScale } from "./resource.scale.production";
import { Scale } from "./scale.production";

export class ProvinceScale extends Scale implements IProvinceScale{
    resources: ResourceScale[];
    constructor(values: any = {}) {
        super(values);
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}