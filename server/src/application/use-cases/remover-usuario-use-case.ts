import { ValidationError } from '../../domain/errors/validation-error.ts';
import { UsuarioRepository } from '../../domain/repositories/usuario-repository.ts';

export class RemoverUsuarioUseCase {
    private usuarioRepository: UsuarioRepository;

    constructor(usuarioRepository: UsuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public async execute(id: number): Promise<void> {
        const linhasAfetadas = await this.usuarioRepository.delete(id);

        if (linhasAfetadas <= 0) {
            throw new ValidationError('Nenhum registro foi excluído! Verifique se o registro informado está correto.');
        }
    }
}
