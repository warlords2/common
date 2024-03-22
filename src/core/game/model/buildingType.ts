import { ICost } from "./cost";
import { ISize } from "./geometry/size";
import { IResourceType } from "./resourceType";
import { IUnitType } from "./unitType";
import { IWorld } from "./world";

export interface IBuildingType{
    name: string;

    size: ISize;
    max_level: number;
    multiplier: number;
    multiplier_cost: number;
    initial: number;

    world: IWorld;

    // trops generate
    hasUnitGenerate: boolean;
    multiplier_unit_cost: number;
    multiplier_unit_time: number;
    unitsGenerate: IUnitType[];

    // warehouse
    hasStore: boolean;
    storeAmount: number;
    multiplier_storage: number;

    //Attack and Life 
    reciveDamage: boolean;
    txRevive: number;
    damage: number;
    health: number;
    agility: number;
    range: number;
    multiplier_damage: number;
    multiplier_health: number;
    multiplier_agility: number;
    multiplier_range: number;


    resources: IResourceType[];
    cost: ICost[];
    
}