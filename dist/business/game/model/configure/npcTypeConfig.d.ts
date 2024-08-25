import { INPCTypeConfig, NpcType } from "../../../../core/index.js";
import { CityConfig } from "./cityConfig";
import { ValidationError } from "class-validator";
export declare class NPCTypeConfig implements INPCTypeConfig {
    name: String;
    npcType: NpcType;
    minPeerProvince: number;
    maxPeerProvince: number;
    aggressionLevel: number;
    interactionDistance: number;
    useMarket: boolean;
    cityInitial: CityConfig;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
