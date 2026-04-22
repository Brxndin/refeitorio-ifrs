import dayjs from "dayjs";

export const isDiaDeHoje = (data: Date | string) => dayjs(data).isSame(dayjs(), 'day');

export const traduzDiaSemana = (data: Date | string) => {
    switch (dayjs(data).day()) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-feira';
        case 4:
            return 'Quinta-feira';
        case 5:
            return 'Sexta-feira';
        case 6:
            return 'Sábado';
        default:
            break;
    }
};
