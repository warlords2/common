export * from '@core';
export * from '@business';

import { validate } from 'class-validator';
import { IUser } from './core';

/*
let test:IUser =  {name: "possivelemail", players: []};

validate(post).then(errors => {
    // errors is an array of validation errors
    if (errors.length > 0) {
      console.log('validation failed. errors: ', errors);
    } else {
      console.log('validation succeed');
    }
});*/