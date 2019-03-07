import {format, transports, createLogger} from 'winston';


const loggerOpts = {
	format : format.combine(  
				format.timestamp({
					format: 'YYYY-MM-DD HH:mm:ss'
				}),
				format.printf(info => `${info.timestamp} [${info.level}] : ${info.message}`)
			),
	transports: [new transports.Console()],
	exceptionHandlers: [new transports.Console()],
	exitOnError: false
}

const logger = createLogger(loggerOpts);

export default logger;
