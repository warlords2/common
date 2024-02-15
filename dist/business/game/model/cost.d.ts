import { ICost } from "../../../core/index.js";
import { ResourceType } from "./resourceType";
export declare class Cost implements ICost {
    resource: ResourceType;
    amount: number;
    fixed: boolean;
}
