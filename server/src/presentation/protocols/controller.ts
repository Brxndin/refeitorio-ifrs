export enum ResponseStatus {
    OK = 'OK',
    CREATED = 'CREATED',
    BAD_REQUEST = 'BAD_REQUEST',
    NOT_FOUND = 'NOT_FOUND',
    UNAUTHORIZED = 'UNAUTHORIZED',
    FORBIDDEN = 'FORBIDDEN',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface DefaultRequest {
    body: any;
    params?: any;
    query?: any;
}

export interface DefaultResponse {
    status: ResponseStatus;
    body: any;
}

export interface Controller {
    handle(request: DefaultRequest): Promise<DefaultResponse>;
}
