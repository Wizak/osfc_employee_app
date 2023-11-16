import React from "react";

export interface Options extends RequestInit {
    user?: {
        authenticated?: boolean;
        token?: string;
    };
}

export const createHeadersFromOptions = (options: Options): Headers => {
    const requestHeaders = (options.headers ||
        new Headers({
            Accept: 'application/json',
        })) as Headers;
    if (
        !requestHeaders.has('Content-Type') &&
        !(options && (!options.method || options.method === 'GET')) &&
        !(options && options.body && options.body instanceof FormData)
    ) {
        requestHeaders.set('Content-Type', 'application/json');
    }
    if (options.user && options.user.authenticated && options.user.token) {
        requestHeaders.set('Authorization', options.user.token);
    }

    return requestHeaders;
};

export const fetchJson = (url, options: Options = {}) => {
    const requestHeaders = createHeadersFromOptions(options);

    return fetch(url, { ...options, headers: requestHeaders })
        .then(response =>
            response.text().then(text => ({
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
                body: text,
            }))
        )
        .then(({ status, statusText, headers, body }) => {
            let json;
            try {
                json = JSON.parse(body);
            } catch (e) {
                // not json, no big deal
            }
            return { status, headers, body, json };
        });
};


const getOptions = (options = {}) => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: 'application/json' });
	}
	const token = localStorage.getItem('token');
	options.headers.set('Authorization', `Bearer ${token}`);
	return options;
}

export const httpClient = (url, options = {}) => {
	const _options = getOptions(options);
	return fetchJson(API_URL+url, _options);
}

const API_URL = 'http://osfc-test.userlogin.eu:8000/'