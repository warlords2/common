import { IWorldConfig } from "@core";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

import { BuildingConfig } from "./buildingConfig";
import { MarketConfig } from "./marketConfig";
import { NPCConfig } from "./npcConfig";
import { PlayerConfig } from "./playerConfig";
import { ProvinceConfig } from "./provinceConfig";
import { ResourceConfig } from "./resourceConfig";
import { UnitConfig } from "./unitConfig";


export class WorldConfig implements IWorldConfig{
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

    isValid(): Promise<ValidationError[]>{

        let groups = undefined;

        let isValid = validate(this, { groups , validationError: { target: false }});

        return isValid;
    }

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
        return;
        }
        Object.assign(this, values);
    }
}