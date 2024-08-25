import { INPCConfig } from "../../../../core/index.js";
import { NPCTypeConfig } from "./npcTypeConfig";
import { ValidationError } from "class-validator";
export declare class NPCConfig implements INPCConfig {
    name: String;
    aggressionLevel: number;
    interactionDistance: number;
    npcTypes: NPCTypeConfig[];
    examples: NPCConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
