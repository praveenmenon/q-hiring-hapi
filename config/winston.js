const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
var winston = require('winston')

const myFormat = printf(info => {
  return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ name: 'error-file', filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ name: 'combined-file', filename: 'logs/combined.log', levels: 'info' })
  ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// 
if (process.env.NODE_ENV !== 'production') {
  // For except production the levels are display in server console
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

module.exports = logger;