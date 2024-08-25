
import { INPCTypeConfig, NpcType } from "@core";
import { CityConfig } from "./cityConfig";

import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class NPCTypeConfig implements INPCTypeConfig{
    name: String;
    npcType: NpcType;
    minPeerProvince: number;
    maxPeerProvince:number;
    aggressionLevel: number;
    interactionDistance: number;
    useMarket: boolean;
    cityInitial: CityConfig;

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
