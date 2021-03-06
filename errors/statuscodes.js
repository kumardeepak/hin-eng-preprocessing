/**
 * possible error codes used by the application
 * @author: KD
 */
'use strict'

/**
 *  200 - OK
    404 - Not Found
    500 - Internal Server Error

    201 - Created
    304 - Not Modified

    400 - Bad Request
    401 - Unauthorized
    403 - Forbidden
 */


exports.StatusCode = {
    SUCCESS: { ok: true, http: { status: 200 }, why: "request successful" },
    ERR_GLOBAL_SYSTEM: { ok: false, http: { status: 500 }, why: "Internal Server Error" },
    ERR_GLOBAL_UNAUTHORIZED: { ok: false, http: { status: 401 }, why: "unauthorized request" },
    ERR_GLOBAL_NOTFOUND: { ok: false, http: { status: 404 }, why: "requested information doesn't exist" },
}