const ELoginErrorMessages = {
  email: {
    required: 'E-mail obrigatório',
    invalidFormat: 'Formato de e-mail inválido',
    invalidMinLength: 'E-mail deve ter pelo menos 6 caracteres'
  },
  password: {
    required: 'Senha obrigatória',
    invalidMinLength: 'Senha deve ter pelo menos 8 caracteres',
    invalidMaxLength: 'Senha deve ter no máximo 64 caracteres',
    shouldContainLowerAndUppercaseLetter: 'Senha deve ter letras minúsculas e maiúsculas',
    shouldContainerAtLeastOneNumber: 'Senha deve ter pelo menos um número',
    shouldContainAtLeastOneSpecialCharacter: 'Senha deve ter pelo menos um caractere especial'
  }
}

export { ELoginErrorMessages };
