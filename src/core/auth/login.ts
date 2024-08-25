import { IUser } from "../model";
import { LoginType } from "./loginType";

export interface ILogin {
    identifier: string;
    password: string;
    nonce: string;
    loginType: LoginType;
    user: IUser;
}