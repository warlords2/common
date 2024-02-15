import { ICost } from "./cost";
export interface IUnitType {
    name: string;
    damage: number;
    health: number;
    agility: number;
    speed: number;
    cargoCapacity: number;
    trainingTime: number;
    cost: ICost[];
}
