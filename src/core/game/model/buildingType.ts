import { ICost } from "./cost";
import { ISize } from "./geometry/size";
import { IResourceType } from "./resourceType";
import { IUnitType } from "./unitType";
import { IWorld } from "./world";

export interface IBuildingType{
    name: string;

    size: ISize;
    hasMaxLevel: boolean;
    maxLevel: number;
    
    initial: number;

    // trops generate
    hasUnitGenerate: boolean;
    multiplierUnitCost: number;
    multiplierUnitTime: number;
    unitsGenerate: IUnitType[];

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
    resources: IResourceType[];

    multiplierCost: number;
    cost: ICost[];
    
}