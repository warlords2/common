import { IUnitType } from "../../../core/index.js";
import { ValidationError } from "class-validator";
import { Cost } from "./cost";
export declare class UnitType implements IUnitType {
    name: string;
    damage: number;
    health: number;
    agility: number;
    speed: number;
    cargoCapacity: number;
    range: number;
    txRevivePercentage: number;
    trainingTimeInHours: number;
    cost: Cost[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
