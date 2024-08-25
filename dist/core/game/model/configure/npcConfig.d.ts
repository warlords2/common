import { INPCTypeConfig } from "./npcTypeConfig";
export interface INPCConfig {
    name: String;
    aggressionLevel: number;
    interactionDistance: number;
    npcTypes: INPCTypeConfig[];
    examples: INPCConfig[];
}