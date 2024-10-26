const EContactUsErrorMessages = {
  email: {
    required: 'E-mail obrigatório',
    invalidFormat: 'Formato de e-mail inválido',
    invalidMinLength: 'E-mail deve ter pelo menos 6 caracteres'
  },
  name: {
    required: 'O nome é obrigatório',
    invalidMinLength: 'O nome deve ter pelo menos 3 caracteres',
  },
  content: {
    required: 'O conteúdo é obrigatório',
    invalidMinLength: 'O conteúdo deve ter pelo menos 10 caracteres',
    invalidMaxLength: 'O conteúdo deve ter no máximo 2500 caracteres'
  }
};

export { EContactUsErrorMessages };
