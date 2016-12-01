
/**
 * Check the response status and return
 * response or throw error
 * @param response
 * @returns {*} response or throw error
 */
export function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

/**
 * Return json parsed response
 * @param response
 * @returns {*} json
 */
export function parseJSON(response) {
    return response.json();
}

/**
 * Create HTTP headers to requests
 * @returns {{Accept: string, Content-Type: string}}
 */
export function getHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
}

/**
 * Check proxy flag to point to specific
 * environment API host
 * @returns {string}
 */
export function resolveHost() {
    const proxy = {
        development: 'http://localhost:8081',
        production: 'http://your-production-doman.com'
    };

    return proxy[process.env.PROXY];
}
