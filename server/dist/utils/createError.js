"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createError;
function createError(message, status) {
    const error = new Error(message);
    error.status = status;
    return error;
}
