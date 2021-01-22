import { ValidatorConstraintInterface, ValidationArguments } from "class-validator";
import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class MongooseId implements ValidatorConstraintInterface {
    validate(text: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare class MongooseIdPipe implements PipeTransform<any> {
    transform(value: any, { metatype }: ArgumentMetadata): Promise<any>;
    toValidate(value: string): boolean;
}
