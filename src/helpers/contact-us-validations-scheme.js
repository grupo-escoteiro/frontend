import z from 'zod';
import { EContactUsErrorMessages } from './enums/contact-us-error-messages.js';

const contactUsFormScheme = z.object({
  email: z
    .string({ required_error: EContactUsErrorMessages.email.required })
    .email(EContactUsErrorMessages.email.invalidFormat)
    .min(6, EContactUsErrorMessages.email.invalidMinLength),
  name: z
    .string({ required_error: EContactUsErrorMessages.name.required })
    .min(3, EContactUsErrorMessages.name.invalidMinLength),
  content: z
    .string({ required_error: EContactUsErrorMessages.content.required })
    .min(10, EContactUsErrorMessages.content.invalidMinLength)
    .max(2500, EContactUsErrorMessages.content.invalidMaxLength)
});

export { contactUsFormScheme };
