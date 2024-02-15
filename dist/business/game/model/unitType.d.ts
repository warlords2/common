import { IUnitType } from "../../../core/index.js";
import { ValidationError } from "class-validator";
export declare class UnitType implements IUnitType {
    name: string;
    damage: number;
    health: number;
    agility: number;
    speed: number;
    cargoCapacity: number;
    trainingTime: number;
    foodConsumption: number;
    currencyConsumption: number;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
