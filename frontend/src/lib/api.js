const urlBase = 'http://localhost:4000/api';

export class Api {
  defaultHeaders = {'Content-Type':'application/json'}

  static fetch(service, options) {
    options = { headers: {}, ...options };
    options.headers = { ...Api.defaultHeaders, ...options.headers }

    if(options.body && typeof options.body != 'string') {
      options.body = JSON.stringify(options.body);
    }

    return fetch( `${urlBase}/${service}`, options);
  };

  static get(service, options) {
    return Api.fetch(service, { ...options, method: 'GET' });
  }
  static post(service, options) {
    return Api.fetch(service, { ...options, method: 'POST' });
  }
};