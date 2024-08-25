import { ILogin, LoginType } from "@core";
import { IsEmail, IsNotEmpty, IsStrongPassword, Length, validate, ValidationError } from "class-validator";
import { User } from "../model";


export class Login implements ILogin{
    @IsNotEmpty()
    @IsEmail({},{
        groups:[ LoginType.MAIL ],
    })
    @Length(14, 80,{
        groups:[ LoginType.NONCE ]
    })
    identifier: string;

    @IsNotEmpty()
    @IsStrongPassword({
        minLength:14,
        minNumbers: 1,
        minUppercase: 1,
        minLowercase: 1
    },{
        groups:[ LoginType.MAIL ]
    })
    password: string;
    
    @IsNotEmpty({
        groups:[ LoginType.NONCE ]
    })
    nonce: string;

    @IsNotEmpty()
    loginType: LoginType;

    user: User;

    isValid(): Promise<ValidationError[]>{
        
        let groups = undefined;

        if( this.loginType )groups = [ this.loginType ];
        
        let isValid = validate(this, { groups , validationError: { target: false }});

        return isValid;
    }

    constructor(values: any = {}) {
        if (Object.entries(values).length === 0 && values.constructor === Object) {
          return;
        }
        Object.assign(this, values);
    }
}