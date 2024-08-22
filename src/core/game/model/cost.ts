import { IResourceType } from "./resourceType";

export interface ICost {
    resourceType: IResourceType;
    amount: number;
    fixed: boolean;
}