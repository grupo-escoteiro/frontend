const dadosPorPagina = 4;
const tamanhoMaxNome = 20;

function maskEmail(email) {
    const [username, domain] = email.split('@');
    const maskedUsername = username.slice(0, 3) + '*****';
    return `${maskedUsername}@${domain}`;
}

function truncateName(name) {
    return name.length > tamanhoMaxNome ? name.slice(0, tamanhoMaxNome) + '...' : name;
}

export { maskEmail, truncateName, dadosPorPagina, tamanhoMaxNome };