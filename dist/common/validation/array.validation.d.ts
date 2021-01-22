import { ValidationOptions } from 'class-validator';
import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare const ARRAY_IS_COORDINATE = "arrayIsCoordinate";
export declare function isLatLong(value: string): boolean;
export declare function isLongitude(value: number): boolean;
export declare function isLatitude(value: number): boolean;
export declare function arrayIsCoordinate(values: any[]): boolean;
export declare function ArrayIsCoordinate(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export declare class CustomArrayLength implements ValidatorConstraintInterface {
    validate(value: Array<any>, validationArguments: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
