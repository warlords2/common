import { IWorld } from "./world";

export interface IResourceType{
    name: String;
    
    hasMaxLevel: boolean;
    maxLevel: number;
    multiplier: number;
    initial: number;
    
    noMarket:boolean;

    fixed: boolean;

    world: IWorld;
}