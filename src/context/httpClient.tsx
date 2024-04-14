import { CapacitorHttp } from '@capacitor/core';

class HttpError extends Error {
    constructor(
        public readonly message,
        public readonly status,
        public readonly data = null
    ) {
        super(message);
        Object.setPrototypeOf(this, HttpError.prototype);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = new Error(message).stack;
        }
        this.stack = new Error().stack;
    }
};

const fetchJson = async (options = {}) => {
    return await CapacitorHttp
        .request(options)
        .then(({ data, url, status, headers }) => {
            if (status < 200 || status >= 300) {
                return Promise.reject(
                    new HttpError(data?.message, status, data)
                );
            }
            return Promise.resolve({ status, headers, data });
        });
};


const getOptions = ({ headers = {}, url = '/', ...restOptions }) => ({ 
    ...restOptions,
    url: `${API_URL}${url}`,
    headers: {
        ...headers,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
});


export const httpClient = (options = {}) => {
	const _options = getOptions(options);
	return fetchJson(_options);
};

export const API_DOMAIN = '93.171.247.14';
export const API_PROTOCOL = 'http';
export const API_PORT = '80';
export const API_URL = `${API_PROTOCOL}://${API_DOMAIN}:${API_PORT}`;
