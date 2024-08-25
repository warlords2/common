import { ICost } from "./cost";
export interface IUnitType {
    name: string;
    damage: number;
    health: number;
    agility: number;
    range: number;
    txRevivePercentage: number;
    speed: number;
    cargoCapacity: number;
    trainingTimeInHours: number;
    cost: ICost[];
}
