import "express-serve-static-core";
import pino from "pino";

declare module "express-serve-static-core" {
    interface Request {
        security_log: pino.Logger;
    }
}