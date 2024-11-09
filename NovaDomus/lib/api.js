// Usa la IP local de tu servidor o una dirección pública si está en la nube
const urlBase = 'http://192.168.1.48:4000/api'; // reemplaza con la IP de tu máquina o el dominio del servidor

export class Api {
  static defaultHeaders = { 'Content-Type': 'application/json' };

  static setMessageForAutoCheck = 1;

  static async fetch(service, options = {}) {
    options = { headers: {}, ...options };
    options.headers = { ...Api.defaultHeaders, ...options.headers };

    if (options.body && typeof options.body !== 'string') {
      options.body = JSON.stringify(options.body);
    }

    let url = `${urlBase}/${service}`;

    if (options.search) {
      let search = options.search;
      if (typeof search !== 'string') {
        search = new URLSearchParams(search).toString();
      }
      url += '?' + search;
    }

    const res = await fetch(url, options);

    if (options.autoCheck === false) {
      return res;
    }

    if (res.ok) {
      return res;
    }

    let message = '';
    try {
      const data = await res.json();
      message = data.message || data.error;
    } catch (e) {
      message = 'Error desconocido';
    }

    if (Api.setMessageForAutoCheck) {
      Api.setMessageForAutoCheck(message);
    }
    throw new Error(message);
  }

  static get(service, options) {
    return Api.fetch(service, { ...options, method: 'GET' });
  }

  static post(service, options) {
    return Api.fetch(service, { ...options, method: 'POST' });
  }

  static delete(service, options) {
    return Api.fetch(service, { ...options, method: 'DELETE' });
  }
}
