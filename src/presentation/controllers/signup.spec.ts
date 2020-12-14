import { SignUpController } from './signup';

describe('SignUp Controller', () => {
  test('Should returns 400 if no name id provided', () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirm: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});