import { ICost } from "@core";
import { ResourceType } from "./resourceType";

export class Cost implements ICost{
    resource: ResourceType;
    amount: number;
    fixed: boolean;
}