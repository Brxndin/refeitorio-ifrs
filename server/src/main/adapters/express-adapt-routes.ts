import { Request, Response } from 'express';
import { Controller, ResponseStatus } from '../../presentation/protocols/controller.ts';

const statusMap: Record<ResponseStatus, number> = {
    [ResponseStatus.OK]: 200,
    [ResponseStatus.CREATED]: 201,
    [ResponseStatus.BAD_REQUEST]: 400,
    [ResponseStatus.NOT_FOUND]: 404,
    [ResponseStatus.UNAUTHORIZED]: 401,
    [ResponseStatus.FORBIDDEN]: 403,
    [ResponseStatus.SERVER_ERROR]: 500,
};

export const ExpressAdaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const defaultRequest = {
            body: req.body,
            params: req.params,
            query: req.query
        };

        const defaultResponse = await controller.handle(defaultRequest);

        const httpStatusCode = statusMap[defaultResponse.status] || 500;

        res.status(httpStatusCode).json(defaultResponse.body);
    };
};
