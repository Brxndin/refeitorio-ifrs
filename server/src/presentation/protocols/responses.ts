import { ValidationError } from "../../domain/errors/validation-error.ts";
import { DefaultResponse, ResponseStatus } from "./controller.ts";

export const ok = (data: any): DefaultResponse => ({
    status: ResponseStatus.OK,
    body: data
});

export const created = (data: any): DefaultResponse => ({
    status: ResponseStatus.CREATED,
    body: data
});

export const badRequest = (message: string): DefaultResponse => ({
    status: ResponseStatus.BAD_REQUEST,
    body: { message: message }
});

export const unauthorized = (message: string): DefaultResponse => ({
    status: ResponseStatus.UNAUTHORIZED,
    body: { message: message }
});

export const forbidden = (message: string): DefaultResponse => ({
    status: ResponseStatus.FORBIDDEN,
    body: { message: message }
});

export const notFound = (message: string): DefaultResponse => ({
    status: ResponseStatus.NOT_FOUND,
    body: { message: message }
});

export const serverError = (message: string) => ({
    status: ResponseStatus.SERVER_ERROR,
    body: { message: message }
});

export const validaErro = (error: Error): DefaultResponse => {
    console.log(error);

    if (error instanceof ValidationError) {
        return badRequest(error.message);
    }

    return serverError('Ocorreu um erro interno. Tente novamente mais tarde ou contate o suporte.');
};
