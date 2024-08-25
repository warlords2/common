import { IBuildingConfig } from "./buildingConfig";
import { IMarketConfig } from "./marketConfig";
import { INPCConfig } from "./npcConfig";
import { IPlayerConfig } from "./playerConfig";
import { IProvinceConfig } from "./provinceConfig";
import { IResourceConfig } from "./resourceConfig";
import { IUnitConfig } from "./unitConfig";
export interface IWorldConfig {
    name: String;
    hasLimitUser: boolean;
    limitUser: number;
    hasMaxTimeInHours: number;
    maxTimeInHours: number;
    hasCityForVitory: boolean;
    cityForVitory: number;
    marketConfig: IMarketConfig;
    resourceConfig: IResourceConfig;
    unitConfig: IUnitConfig;
    buildingConfig: IBuildingConfig;
    provinceConfig: IProvinceConfig;
    npcConfig: INPCConfig;
    playerConfig: IPlayerConfig;
    examples: IWorldConfig[];
}
