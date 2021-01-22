import { ValidationOptions, registerDecorator } from 'class-validator';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import validator = require('validator');
export const ARRAY_IS_COORDINATE = 'arrayIsCoordinate';
/**
 * Checks if a value is string in format a "latitude,longitude".
 */
export function isLatLong(value: string): boolean {
    return typeof value === 'string' && validator.default.isLatLong(value) ;
}
/**
 * Checks if a given value is a longitude.
 */
export function isLongitude(value: number): boolean {
    return (typeof value === 'number') && isLatLong(`0,${value}`);
}

/**
 * Checks if a given value is a latitude.
 */
export function isLatitude(value: number): boolean {
    return (typeof value === 'number') && isLatLong(`${value},0`);
}
/**
 * Checks if array contains a GeoJson valid values.
 * If null or undefined is given then this function returns false.
 */
export function arrayIsCoordinate(values: any[]) {
    if (!Array.isArray(values)) {
        return false;
    }
    if (values.length !== 2) {
        return false;
    }
    const isValidLongitude = isLongitude(values[0]);
    const isValidLatitude = isLatitude(values[1]);
    return isValidLatitude && isValidLongitude;
}

/**
 * Checks if array contains all values from the given array of values.
 * If null or undefined is given then this function returns false.
 */
export function ArrayIsCoordinate(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'arrayIsCoordinate',
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args) {
                    return arrayIsCoordinate(value);
                },
                defaultMessage(){
                    return "location is incorrect"
                }
            },
        });
    };
}


@ValidatorConstraint()
export class CustomArrayLength implements ValidatorConstraintInterface {
  validate(value: Array<any>, validationArguments: ValidationArguments) {
    return value.length<=validationArguments.constraints[0] ;
  }
  defaultMessage(args: ValidationArguments) { // here you can provide default error message if validation failed
    return args.property + " is incorrect ";
}
}