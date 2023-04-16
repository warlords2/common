import { ILogin, TypeLogin } from "@core";
import { IsEmail, IsNotEmpty, IsStrongPassword, Length, validate, ValidationError } from "class-validator";
import { User } from "../model";


export class Login implements ILogin{
    @IsNotEmpty()
    @IsEmail({},{
        groups:[ TypeLogin.MAIL ],
    })
    @Length(14, 80,{
        groups:[ TypeLogin.NONCE ]
    })
    identifier: string;

    @IsNotEmpty()
    @IsStrongPassword({
        minLength:14,
        minNumbers: 1,
        minUppercase: 1,
        minLowercase: 1
    },{
        message:'',
        groups:[ TypeLogin.MAIL ]
    })
    password: string;
    
    @IsNotEmpty({
        groups:[ TypeLogin.NONCE ]
    })
    nonce: string;

    type: TypeLogin;
    user: User;

    isValid(): Promise<ValidationError[][]>{

        let isDefaultValid = validate(this,{ groups: undefined });

        let groups = [ this.type ];
        let isAuthValid = validate(this, { groups });

        return Promise.all([ isDefaultValid, isAuthValid ]);
    }

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}