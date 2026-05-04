import { Usuario } from '../../domain/entities/usuario.ts';
import { UsuarioRepository } from '../../domain/repositories/usuario-repository.ts';

export class BuscarUsuarioUseCase {
    private usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public async execute(id: number): Promise<Usuario | null> {
        return await this.usuarioRepository.find(id);
    }
}
