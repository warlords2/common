export * from '@core';
export * from '@business';


/*
import { validate } from 'class-validator';
import { Login } from './business/auth';



let test:Login =  new Login({identifier: "possivelemail@ggg.com", password:'Soil23123@'});

test.isValid().then(errors => {
  // errors is an array of validation errors
  if (errors.length > 0) {
    console.log('validation failed. errors: ');
    for(let group of errors){
			
				console.log(group)
			
		}
    
  } else {
    console.log('validation succeed');
  }
});
/*
validate(test).then(errors => {
    // errors is an array of validation errors
    if (errors.length > 0) {
      console.log('validation failed. errors: ', errors);
    } else {
      console.log('validation succeed');
    }
});*/