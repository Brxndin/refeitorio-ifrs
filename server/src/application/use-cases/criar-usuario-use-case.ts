import { Usuario } from '../../domain/entities/usuario.ts';
import { UsuarioRepository } from '../../domain/repositories/usuario-repository.ts';
import { Email } from '../../domain/value-objects/email.ts';
import { Senha } from '../../domain/value-objects/senha.ts';
import { UsuarioInput } from '../dtos/criar-usuario-dto.ts';

export class CriarUsuarioUseCase {
    private usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public async execute(input: UsuarioInput): Promise<Usuario | null> {
        const usuario = new Usuario({
            nome: input.nome,
            tipo: input.tipo,
            email: Email.create(input.email),
            senha: Senha.create(input.senha),
        });

        const usuarioId = await this.usuarioRepository.insert(usuario);

        return await this.usuarioRepository.find(usuarioId);
    }
}
