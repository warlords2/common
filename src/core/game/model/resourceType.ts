export interface IResourceType{
    name: String;

    max_level: number;
    multiplier: number;
    initial: number;

    resources: { resource: IResourceType, max_level: number, multiplier: number, initial: number  }[];
}