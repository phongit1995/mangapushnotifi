import {ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from "class-validator";
import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common';
import * as mongoose from 'mongoose';
@ValidatorConstraint({ async: false })
export class MongooseId implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments) {
        return mongoose.Types.ObjectId.isValid(text);
    }
 
    defaultMessage(args: ValidationArguments) { // here you can provide default error message if validation failed
        return "Not Found Mongoose Id";
    }
 
}
export class MongooseIdPipe implements PipeTransform<any> {
    async transform(value: any, { metatype }: ArgumentMetadata){
        if(this.toValidate(value)){
            return value ;
        }
        throw new HttpException("Not Found Id Mongo",HttpStatus.BAD_REQUEST);
    }
    toValidate(value:string):boolean{
        return mongoose.Types.ObjectId.isValid(value);
    }
}