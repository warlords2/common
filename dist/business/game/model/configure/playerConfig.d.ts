import { IPlayerConfig } from "../../../../core/index.js";
import { ValidationError } from "class-validator";
export declare class PlayerConfig implements IPlayerConfig {
    name: String;
    choiceProvince: boolean;
    choiceCityPosition: boolean;
    examples: PlayerConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
