import { ILogin, LoginType } from "../../core/index.js";
import { ValidationError } from "class-validator";
import { User } from "../model";
export declare class Login implements ILogin {
    identifier: string;
    password: string;
    nonce: string;
    loginType: LoginType;
    user: User;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
