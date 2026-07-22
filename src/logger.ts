import pino, { destination, transport } from "pino";

//transporte 
// 1 Terminal
// 2  Arquivo

function createLogger(
    level: string,
    file: string
) {
    const transport = pino.transport({
        targets: [{
            target: "pino-pretty",
            level: level,
            options: {
                colorize: true
            }
        }, {
            target: "pino/file",
            level,
            options: {
                destination: file,
                mkdir: true
            }
        }
        ]
    })

    return pino(
        {
            timestamp: pino.stdTimeFunctions.isoTime,
            redact: [
                "password",
                "token","passwordHash",
                "req.headers.authorization"
            ]
        },
        transport
    );
}

export const applicationLogger = createLogger(
    "info",
    "logs/application.log"
)


export const securityLogger = createLogger(
    "warn",
    "logs/security.log"
);

