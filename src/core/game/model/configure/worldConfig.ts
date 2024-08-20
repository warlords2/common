import { IBuildingConfig } from "./buildingConfig";
import { IMarketConfig } from "./marketConfig";
import { INPCConfig } from "./npcConfig";
import { IProvinceConfig } from "./provinceConfig";
import { IResourceConfig } from "./resourceConfig";
import { IUnitConfig } from "./unitConfig";

/*  Gil!!! Pensa sempre na interface do adininistrador pfff */
export interface IWorldConfig{
    name: String;
    marketConfig: IMarketConfig;
    resourceConfig: IResourceConfig;
    unitConfig: IUnitConfig;
    buildingConfig: IBuildingConfig;
    provinceConfig: IProvinceConfig;
    npcConfig: INPCConfig;
    examples: IWorldConfig[];
}