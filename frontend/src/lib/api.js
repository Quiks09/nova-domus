const urlBase = 'http://localhost:4000/api';

export function api (service, method, body){
    if (body){
      body: JSON.stringify(body);
    }
    
  
      return   fetch(
          `${urlBase}/${service}`,
          {
          method: method ?? 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          body
        }
    )
  };