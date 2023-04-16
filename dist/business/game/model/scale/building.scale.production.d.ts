import { IBuildingScale } from "../../../../core/index.js";
import { ResourceScale } from "./resource.scale.production";
import { Scale } from "./scale.production";
export declare class BuildingScale extends Scale implements IBuildingScale {
    resources: ResourceScale[];
    constructor(values?: any);
}
