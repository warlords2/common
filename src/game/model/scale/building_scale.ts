import { ResourceType } from "../enum/resource_type";
import { Scale } from "./scale";

export interface BuildingScale extends Scale{
    type_generate: ResourceType;
}