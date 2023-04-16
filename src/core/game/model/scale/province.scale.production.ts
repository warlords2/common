import { IResourceScale } from "./resource.scale.production";
import { IScale } from "./scale.production";

export interface IProvinceScale extends IScale{
    resources: IResourceScale[];
}