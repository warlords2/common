import { ICost } from "@core";
import { ResourceType } from "./resourceType";
import { IsNotEmpty } from "class-validator";

export class Cost implements ICost{
    @IsNotEmpty()
    resourceType: ResourceType;
    @IsNotEmpty()
    amount: number;
    @IsNotEmpty()
    fixed: boolean;
}