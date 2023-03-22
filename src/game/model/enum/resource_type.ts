import { NONAME } from "dns";

export enum ResourceType{
    Food        = "food",
    Wood        = "wood",
    Iron        = "iron",
    Stone       = "stone",

    notApply        = "notapply",

    // Buffs
    BuffTimeUnit            = "bufftimeunit",
    BuffTimeUnitBuilding    = "bufftimeunitbuilding",
    BuffTimeSearch          = "bufftimesearch",
    BuffStorage             = "buffstorage",
    BuffPopulation          = "buffpopulation",
    BuffTransaction         = "bufftransaction",
    BuffPopulationHappiness = "buffpopulationhappiness"
}