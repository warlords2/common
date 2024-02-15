import { IResourceType } from "./resourceType";
export interface IBuildingType {
    name: string;
    max_level: number;
    multiplier: number;
    initial: number;
    resources: {
        resource: IResourceType;
        max_level: number;
        multiplier: number;
        initial: number;
    }[];
    cost: {
        resource: IResourceType;
        max_level: number;
        multiplier: number;
        initial: number;
    }[];
}
