import { IResourceScale } from "./resource.scale.production";
import { IScale } from "./scale.production";
export interface IBuildingScale extends IScale {
    resources: IResourceScale[];
}
