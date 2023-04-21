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
        groups:[ TypeLogin.MAIL ]
    })
    password: string;
    
    @IsNotEmpty({
        groups:[ TypeLogin.NONCE ]
    })
    nonce: string;

    @IsNotEmpty()
    type: TypeLogin;

    user: User;

    isValid(): Promise<ValidationError[]>{
        
        let groups = undefined;

        if( this.type )groups = [ this.type ];
        
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