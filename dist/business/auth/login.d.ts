import { ILogin, TypeLogin } from "../../core/index.js";
import { ValidationError } from "class-validator";
import { User } from "../model";
export declare class Login implements ILogin {
    identifier: string;
    password: string;
    nonce: string;
    type: TypeLogin;
    user: User;
    isValid(): Promise<ValidationError[]>;
    constructor(values?: any);
}
