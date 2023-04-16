import { IProvinceScale } from "../../../../core/index.js";
import { ResourceScale } from "./resource.scale.production";
import { Scale } from "./scale.production";
export declare class ProvinceScale extends Scale implements IProvinceScale {
    resources: ResourceScale[];
    constructor(values?: any);
}
