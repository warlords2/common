import { IWorldConfig } from "../../../../core/index.js";
import { ValidationError } from "class-validator";
import { BuildingConfig } from "./buildingConfig";
import { MarketConfig } from "./marketConfig";
import { NPCConfig } from "./npcConfig";
import { PlayerConfig } from "./playerConfig";
import { ProvinceConfig } from "./provinceConfig";
import { ResourceConfig } from "./resourceConfig";
import { UnitConfig } from "./unitConfig";
export declare class WorldConfig implements IWorldConfig {
    name: String;
    hasLimitUser: boolean;
    limitUser: number;
    hasMaxTimeInHours: number;
    maxTimeInHours: number;
    hasCityForVitory: boolean;
    cityForVitory: number;
    marketConfig: MarketConfig;
    resourceConfig: ResourceConfig;
    unitConfig: UnitConfig;
    buildingConfig: BuildingConfig;
    provinceConfig: ProvinceConfig;
    npcConfig: NPCConfig;
    playerConfig: PlayerConfig;
    examples: WorldConfig[];
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
