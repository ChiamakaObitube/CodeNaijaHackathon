import { createLogger, format, transports } from 'winston';

const {
    combine,
    timestamp,
    label,
    prettyPrint,
    splat,
    simple,
    metadata,
    colorize,
} = format;

const logger = createLogger({
    format: combine(
        label({ label: 'weespend' }),
        timestamp(),
        prettyPrint(),
        splat(),
        simple(),
        metadata(),
        colorize(),
    ),
    transports: [new transports.Console()],
});

export default logger;