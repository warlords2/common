"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./core/index.js"), exports);
__exportStar(require("./business/index.js"), exports);
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
//# sourceMappingURL=index.js.map