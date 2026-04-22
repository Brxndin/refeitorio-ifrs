import { TipoRefeicao } from "../enums/TipoRefeicao";

export const traduzTipoRefeicao = (tipo: TipoRefeicao | number) => {
    switch (tipo) {
        case TipoRefeicao.CafeDaManha:
            return 'Café da Manhã';
        case TipoRefeicao.Almoco:
            return 'Almoço';
        case TipoRefeicao.Jantar:
            return 'Jantar';
        default:
            break;
    }
};
