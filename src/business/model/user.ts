import { IsNotEmpty, validate, ValidationError } from "class-validator";
import { IUser } from "@core";
import { Player } from "../game";


export class User implements IUser{
    @IsNotEmpty()
    name: String;
    players: Player[];

    isValid(): Promise<ValidationError[]>{

        let groups = undefined;

        let isValid = validate(this, { groups , validationError: { target: false }});

        return isValid;
    }
}