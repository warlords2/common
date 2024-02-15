import { IBuildingType, IResourceType } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";
import { Size } from "./geometry/size";
import { ResourceType } from "./resourceType";
import { UnitType } from "./unitType";

export class BuildingType implements IBuildingType{

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    size: Size;

    max_level: number;
    multiplier: number;
    multiplier_cost: number;
    initial: number;

    hasUnitGenerate: boolean;
    multiplier_unit_cost: number;
    multiplier_unit_time: number;
    unitsGenerate: UnitType[];

    resources: ResourceType[];
    cost: ResourceType[];

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