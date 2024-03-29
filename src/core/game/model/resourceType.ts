import { IWorld } from "./world";

export interface IResourceType{
    name: String;

    max_level: number;
    multiplier: number;
    initial: number;

    fixed: boolean;

    world: IWorld;
}