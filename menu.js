window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 150)
})

const usuarios = [];

// Função para adicionar um usuário
function adicionarUsuario(cpf, endereco, nomeCompleto, email, telefone) {
    // Verificar se todos os campos foram preenchidos
    if (!cpf || !endereco || !nomeCompleto || !email || !telefone) {
        console.error('Todos os campos são obrigatórios.');
        return;
    }

    // Criar um objeto de usuário
    const usuario = {
        cpf: cpf,
        endereco: endereco,
        nomeCompleto: nomeCompleto,
        email: email,
        telefone: telefone
    };

    // Adicionar o usuário ao array
    usuarios.push(usuario);
    console.log('Usuário adicionado com sucesso!');
}

// Função para listar todos os usuários
function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log('Nenhum usuário cadastrado.');
        return;
    }
    
    console.log('Lista de Usuários:');
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. CPF: ${usuario.cpf}, Nome: ${usuario.nomeCompleto}, Endereço: ${usuario.endereco}, E-mail: ${usuario.email}, Telefone: ${usuario.telefone}`);
    });
}

// Exemplo de uso
adicionarUsuario(
    '123.456.789-00',
    'Rua das Flores, 123 - Apto 456',
    'João da Silva',
    'joao.silva@example.com',
    '(11) 98765-4321'
);

adicionarUsuario(
    '987.654.321-00',
    'Avenida Paulista, 1000 - Sala 10',
    'Maria Oliveira',
    'maria.oliveira@example.com',
    '(11) 12345-6789'
);

// Listar usuários cadastrados
listarUsuarios();