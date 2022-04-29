const SUCCESS_CODE = 200; //POST
const SUCCESS_MSG = "OK."; //
const ACCEPTED_CODE = 202; // if the response includes an entity describing the status. The status should be 202 (Accepted) if the action has been queued
const successCodeUpdate = 204; // For Patch useful in update when response body not required
// 204 response code is used because the response does not carry a message body

// 4** code
const BAD_REQ_CODE = 400;
const BAD_REQ_MSG = "Bad Request.";

const AUTH_ERR_CODE = 401;

const FORBIDDEN_CODE = 403;
const FORBIDDEN_MSG = "Forbidden";

const NOT_FOUND_CODE = 404;
const NOT_FOUND_MSG = "Not Found.";

const NOT_ALLOWED_CODE = 405;

const CONFLICT_CODE = 409;
const CONFLICT_MSG = "Conflict";

// 5** code
const SERVER_ERROR_CODE = 500;
const SERVER_ERROR_MSG = "Internal Server Error.";

module.exports = {
  SUCCESS_CODE: SUCCESS_CODE,
  SUCCESS_MSG: SUCCESS_MSG,
  BAD_REQ_CODE: BAD_REQ_CODE,
  BAD_REQ_MSG: BAD_REQ_MSG,
  AUTH_ERR_CODE: AUTH_ERR_CODE,
  SERVER_ERROR_CODE: SERVER_ERROR_CODE,
  SERVER_ERROR_MSG: SERVER_ERROR_MSG,
  NOT_FOUND_CODE: NOT_FOUND_CODE,
  NOT_ALLOWED_CODE: NOT_ALLOWED_CODE,
  ACCEPTED_CODE: ACCEPTED_CODE,
  CONFLICT_CODE: CONFLICT_CODE,
  FORBIDDEN_CODE: FORBIDDEN_CODE,
  FORBIDDEN_MSG: FORBIDDEN_MSG,
  NOT_FOUND_MSG: NOT_FOUND_MSG,
  CONFLICT_MSG: CONFLICT_MSG,
};
