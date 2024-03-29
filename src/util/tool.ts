/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str: any) {
    if (typeof str === "string" || str instanceof String) {
        return true;
    }
    return false;
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg: any) {
    if (typeof Array.isArray === "undefined") {
        return Object.prototype.toString.call(arg) === "[object Array]";
    }
    return Array.isArray(arg);
}
