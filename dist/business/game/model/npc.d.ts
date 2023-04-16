import { INpc, NpcType } from "../../../core/index.js";
import { ValidationError } from "class-validator";
export declare class Npc implements INpc {
    name: String;
    type: NpcType;
    isValid(): Promise<ValidationError[][]>;
    constructor(values?: any);
}
