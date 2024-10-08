const path = require('path');
const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');

const logDir = path.resolve(__dirname, '../logging');  

const dailyRotateFileTransport = new winstonDaily({
    level: 'silly',
    filename: `${logDir}/application-%DATE%.log`, 
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '30m',
    maxFiles: '14d'
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD hh:mm:ss.SSS A"
        }),
        winston.format.label({ label: "LOGGER" }),
        winston.format.printf(info =>
            `${info.label} ${info.timestamp} ${info.level}: ${info.message}`
        )
    ),
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize({ all: true }),
            )
        }),
        dailyRotateFileTransport
    ]
});

module.exports = logger;
