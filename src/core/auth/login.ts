import { IUser } from "../model";
import { TypeLogin } from "./type_login";

export interface ILogin {
    identifier: string;
    password: string;
    nonce: string;
    type: TypeLogin;
    user: IUser;
}