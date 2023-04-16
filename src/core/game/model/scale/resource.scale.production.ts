import { ResourceType } from "../enum/resource_type";
import { IScale } from "./scale.production";

export interface IResourceScale extends IScale{
    type_generate: ResourceType;
}