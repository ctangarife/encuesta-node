import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Gender, TypeIdentification } from '../enum/users.enum';

// Custom validator to check email domain
@ValidatorConstraint({ name: 'isUManizalesEmail', async: false })
export class IsUManizalesEmail implements ValidatorConstraintInterface {
  validate(email: string, args: ValidationArguments) {
    // Regex para validar que el email termine en "@umanizales.edu.co"
    const umanizalesEmailRegex = /^[a-zA-Z0-9._%+-]+@umanizales\.edu\.co$/;
    return umanizalesEmailRegex.test(email);
  }

  defaultMessage(args: ValidationArguments) {
    return 'El email debe pertenecer al dominio @umanizales.edu.co';
  }
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsEmail()
  @Validate(IsUManizalesEmail)
  email: string;

  @IsNotEmpty()
  @IsString()
  identification: string;

  @IsEnum(TypeIdentification)
  typeIdentification: TypeIdentification;

  @IsNotEmpty()
  @Type(() => Date)
  birthDate: Date;

  @IsEnum(Gender)
  gender: Gender;
}
