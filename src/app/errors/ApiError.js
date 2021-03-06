const AppError = require('./AppError');
/**
 * This class is an implementation of RFC-7807(Problem Details for HTTP APIs)
 * https://tools.ietf.org/html/rfc7807
 * 
 * @param {String} title a short, human-readable summary of the problem type
 * @param {Number} status the HTTP status code generated by the origin server for this occurrence of the problem
 * @param {String} message a human-readable explanation specific to this occurrence of the problem (detail in RFC)
 * @param {String} instance a URI reference that identifies the specific occurrence of the problem
 * @constructor
 */

class ApiError extends AppError {
  constructor(title, status, message, instance ) {
    super(message);
    this.title = title || 'HTTP API Error';
    this.status = status || 500;
    this.instance = instance || '/error';
  }
};

module.exports = ApiError;
