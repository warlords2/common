import { ResourceType } from "@business";
import { IResourceType } from "./resourceType";
import { ICost } from "./cost";
import { IWorld } from "./world";

export interface IUnitType{
    name: string;
    damage: number;
    health: number;
    agility: number;
    range: number;
    txRevive: number;

    world: IWorld;

    speed: number;
    cargoCapacity: number;
    trainingTime: number;
    

    cost: ICost[];
}