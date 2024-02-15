import { IBuildingType, IResourceType } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";
import { Size } from "./geometry/size";
import { ResourceType } from "./resourceType";

export class BuildingType implements IBuildingType{

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    size: Size;

    max_level: number;
    multiplier: number;
    multiplier_cost: number;
    initial: number;

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