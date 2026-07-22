import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { AppError } from "../shared/errors/AppError";
import { applicationLogger, securityLogger } from '../logger'

export const middlewareError: ErrorRequestHandler = (
    error: Error & Partial<AppError>,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    //Erros conhecidos da aplicação
    if (error instanceof AppError) {


        //Outra maneir melhjor ?
        if (error instanceof UnauthorizedError ||
            error instanceof ForbiddenError) {
            securityLogger.warn({
                message: error.message,
                typeError: error.typeError,
                url: req.originalUrl,
                ip: req.ip
            });

        } else {
            applicationLogger.warn({
                message: error.message,
                typeError: error.typeError,
                url: req.originalUrl
            });
        }


        return res.status(error.statusCode)
            .json({
                msg: error.message,
                typeError: error.typeError
            })
    };
}


// 400
export class BadRequestError extends AppError {
    constructor(
        message = "Bad Request",
        typeError: string
    ) {
        super(message, 400, typeError);
    }
}

// 401
export class UnauthorizedError extends AppError {
    constructor(
        message = "Unauthorized",
        typeError: string
    ) {
        super(message, 401, typeError);
    }
}

// 403
export class ForbiddenError extends AppError {
    constructor(
        message = "Forbidden",
        typeError: string
    ) {
        super(message, 403, typeError);
    }
}

// 404
export class NotFoundError extends AppError {
    constructor(
        message = "Resource not found",
        typeError: string
    ) {
        super(message, 404, typeError);
    }
}

// 409
export class ConflictError extends AppError {
    constructor(
        message = "Conflict",
        typeError: string
    ) {
        super(message, 409, typeError);
    }
}

// 422
export class UnprocessableEntityError extends AppError {
    constructor(
        message = "Validation failed",
        typeError: string
    ) {
        super(message, 422, typeError);
    }
}

// 429
export class TooManyRequestsError extends AppError {
    constructor(
        message = "Too many requests",
        typeError: string
    ) {
        super(message, 429, typeError);
    }
}

// 500
export class InternalServerError extends AppError {
    constructor(
        message = "Internal Server Error",
        typeError: string
    ) {
        super(message, 500, typeError);
    }
}

// 503
export class ServiceUnavailableError extends AppError {
    constructor(
        message = "Service unavailable",
        typeError: string
    ) {
        super(message, 503, typeError);
    }
}