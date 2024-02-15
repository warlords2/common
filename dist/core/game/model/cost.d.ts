import { IResourceType } from "./resourceType";
export interface ICost {
    resource: IResourceType;
    amount: number;
    fixed: boolean;
}
