import {EmailValidator} from 'shared/email-validator';

describe('Email Validator', () => {

  it('should validate a valid email address', () => {
    let validEmailAddress = 'contato@rafaelcamargo.com';
    let emailValidator = new EmailValidator();
    expect(emailValidator.isValid(validEmailAddress)).toEqual(true);
  });

  it('should invalidate an invalid email address', () => {
    let invalidEmailAddress = 'inv@lid';
    let emailValidator = new EmailValidator();
    expect(emailValidator.isValid(invalidEmailAddress)).toEqual(false);
  });

});
