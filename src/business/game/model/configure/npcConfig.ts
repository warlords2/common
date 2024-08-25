import { INPCConfig } from "@core";
import { NPCTypeConfig } from "./npcTypeConfig";


import { IsNotEmpty, IsNumber, validate, ValidationError } from "class-validator";

export class NPCConfig implements INPCConfig{
    name: String;
    aggressionLevel: number;
    interactionDistance: number;
    npcTypes: NPCTypeConfig[];
    examples: NPCConfig[];

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