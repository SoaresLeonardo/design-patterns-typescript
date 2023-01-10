import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é valido (CLASS)');
  } else {
    console.log('Email é invalido (CLASS)');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email é valido (FN)');
  } else {
    console.log('Email é invalido (FN)');
  }
}

validaEmailClass(
  new EmailValidatorClassAdapter(),
  'leonardohenrique@gmail.com',
);

validaEmailFn(emailValidatorFnAdapter, 'leonardohenrique@gmail.com');
