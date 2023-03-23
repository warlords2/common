import { ResourceType } from "../enum/resource_type";
import { ResourceScale } from "./resource.scale.production";
import { Scale } from "./scale.production";

export interface BuildingScale extends Scale{
    resources: ResourceScale[];
}