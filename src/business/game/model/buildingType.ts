import { IBuildingType, IResourceType } from "@core";
import { IsNotEmpty, validate, ValidationError } from "class-validator";
import { Size } from "./geometry/size";
import { ResourceType } from "./resourceType";
import { UnitType } from "./unitType";
import { Cost } from "./cost";

export class BuildingType implements IBuildingType{
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    size: Size;

    @IsNotEmpty()
    hasMaxLevel: boolean;

    @IsNotEmpty()
    maxLevel: number;
    
    @IsNotEmpty()
    initial: number;

    // trops generate
    hasUnitGenerate: boolean;
    multiplierUnitCost: number;
    multiplierUnitTime: number;
    unitsGenerate: UnitType[];

    // warehouse
    hasStore: boolean;
    storeAmount: number;
    multiplierStorage: number;

    // market
    hasMarket: boolean;
    initialMaxOffers: number;
    multiplierMaxOffers: number;

    //Attack and Life 
    receiveDamage: boolean;
    txRevive: number;
    damage: number;
    health: number;
    agility: number;
    range: number;
    multiplierDamage: number;
    multiplierHealth: number;
    multiplierAgility: number;
    multiplierRange: number;

    // @todo colocar um campo sobre a edificação ser removivel ou não
    
    multiplierResources: number;
    resources: ResourceType[];

    multiplierCost: number;
    cost: Cost[];
    

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