"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomArrayLength = exports.ArrayIsCoordinate = exports.arrayIsCoordinate = exports.isLatitude = exports.isLongitude = exports.isLatLong = exports.ARRAY_IS_COORDINATE = void 0;
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
const validator = require("validator");
exports.ARRAY_IS_COORDINATE = 'arrayIsCoordinate';
function isLatLong(value) {
    return typeof value === 'string' && validator.default.isLatLong(value);
}
exports.isLatLong = isLatLong;
function isLongitude(value) {
    return (typeof value === 'number') && isLatLong(`0,${value}`);
}
exports.isLongitude = isLongitude;
function isLatitude(value) {
    return (typeof value === 'number') && isLatLong(`${value},0`);
}
exports.isLatitude = isLatitude;
function arrayIsCoordinate(values) {
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
exports.arrayIsCoordinate = arrayIsCoordinate;
function ArrayIsCoordinate(validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            name: 'arrayIsCoordinate',
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    return arrayIsCoordinate(value);
                },
                defaultMessage() {
                    return "location is incorrect";
                }
            },
        });
    };
}
exports.ArrayIsCoordinate = ArrayIsCoordinate;
let CustomArrayLength = class CustomArrayLength {
    validate(value, validationArguments) {
        return value.length <= validationArguments.constraints[0];
    }
    defaultMessage(args) {
        return args.property + " is incorrect ";
    }
};
CustomArrayLength = __decorate([
    class_validator_2.ValidatorConstraint()
], CustomArrayLength);
exports.CustomArrayLength = CustomArrayLength;
//# sourceMappingURL=array.validation.js.map