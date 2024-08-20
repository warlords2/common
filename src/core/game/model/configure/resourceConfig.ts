import { IResourceType } from "../resourceType";

export interface IResourceConfig{
    name: String;
    resourcesType: IResourceType[];
    examples: IResourceConfig[];
}