import z from 'zod';
import { ELoginErrorMessages } from '../helpers/enums/login-error-messages.js';

const loginFormSchema = z.object({
  email: z
    .string({ required_error: ELoginErrorMessages.email.required })
    .email(ELoginErrorMessages.email.invalidFormat)
    .min(6, ELoginErrorMessages.email.invalidMinLength),
  password: z
    .string({ required_error: ELoginErrorMessages.password.required })
    .min(8, ELoginErrorMessages.password.invalidMinLength)
    .max(64, ELoginErrorMessages.password.invalidMaxLength)
    .refine(
      value => /[a-zA-Z]/.test(value),
      { message: ELoginErrorMessages.password.shouldContainLowerAndUppercaseLetter }
    )
    .refine(
      value => /\d/.test(value),
      { message: ELoginErrorMessages.password.shouldContainerAtLeastOneNumber }
    )
    .refine(
      value => /[!@#$%^&*(),.?":{}|<>]/.test(value),
      { message: ELoginErrorMessages.password.shouldContainAtLeastOneSpecialCharacter }
    ),
});

export { loginFormSchema };
