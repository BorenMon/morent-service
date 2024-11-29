import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class IsTimeConstraint implements ValidatorConstraintInterface {
    validate(time: string): boolean {
        const timeRegex = /^([01]\d|2[0-3]):[0-5]\d$/;
        return timeRegex.test(time);
    }

    defaultMessage(): string {
        return 'Time must be in the format HH:MM AM/PM (e.g., 03:45 PM)';
    }
}

export function IsTime(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsTimeConstraint,
        });
    };
}
