import { IResourceScale, ResourceType } from "../../../../core/index.js";
import { Scale } from "./scale.production";
export declare class ResourceScale extends Scale implements IResourceScale {
    type_generate: ResourceType;
    constructor(values?: any);
}
